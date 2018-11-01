class MyContainer extends HTMLElement {
  // This gets called when the HTML parser sees your tag
  constructor() {
    super(); // always call super() first in the constructor.
    this.msg = this.getAttribute('data-text') || 'Hello, World!';
  }
  // Called when your element is inserted in the DOM or
  // immediately after the constructor if it’s already in the DOM
  // 在 custom element首次被插入到文档DOM节点上时被调用
  connectedCallback() {
    this.innerHTML = `<p>${this.msg}</p>`;
  }
  // 在 custom element增加、删除或者修改某个属性时被调用
  attributeChangedCallback() {
    console.log('调用');
  }
}
// This registers your new tag and associates it with your class
window.customElements.define('my-container', MyContainer);
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'}); // closed

    // Create spans
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    // Take attribute content and put it inside the info span
    const text = this.getAttribute('data-text');
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);

// 可折叠ul
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    window.onload = function() {
      const uls = Array.from(document.querySelectorAll(':root ul'));
      const lis = Array.from(document.querySelectorAll(':root li'));

      uls.slice(1).forEach(ul => {
        ul.style.display = 'none';
      });

      lis.forEach(li => {
        const childText = li.childNodes[0];
        const newSpan = document.createElement('span');

        newSpan.textContent = childText.textContent;
        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      });

      const spans = Array.from(document.querySelectorAll(':root span'));

      spans.forEach(span => {
        if (span.nextElementSibling) {
          span.style.cursor = 'pointer';
          span.parentNode.setAttribute('class', 'closed');
          span.onclick = showul;
          // span.onmouseover = hovershowul;
          // span.onmouseout = hideul;
        }
      });

      function showul(e) {
        const nextul = e.target.nextElementSibling;

        if (nextul.style.display == 'block') {
          nextul.style.display = 'none';
          nextul.parentNode.setAttribute('class', 'closed');
        } else {
          nextul.style.display = 'block';
          nextul.parentNode.setAttribute('class', 'open');
        }
      }
      function hovershowul(e) {
        const nextul = e.target.nextElementSibling;

        if (nextul.style.display == 'block') {
          nextul.style.display = 'none';
          nextul.parentNode.setAttribute('class', 'closed');
        } else {
          nextul.style.display = 'block';
          nextul.parentNode.setAttribute('class', 'open');
        }
      }
      function hideul(e) {
        const nextul = e.target.nextElementSibling;

        if (nextul.style.display == 'block') {
          nextul.style.display = 'none';
          nextul.parentNode.setAttribute('class', 'closed');
        } else {
          nextul.style.display = 'block';
          nextul.parentNode.setAttribute('class', 'open');
        }
      }
    };
  }
}

// Define the new element
customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
