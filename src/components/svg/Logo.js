import React from 'react'

const Logo = props => (
  <svg width={161} height={61} {...props}>
    <title>{'Logo'}</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M95.04 26.14c-.693.36-1.503.653-2.43.88a12.74 12.74 0 0 1-3.03.34c-1.133 0-2.177-.18-3.13-.54a7.223 7.223 0 0 1-2.46-1.52 6.93 6.93 0 0 1-1.61-2.35c-.387-.913-.58-1.93-.58-3.05 0-1.133.197-2.16.59-3.08a6.851 6.851 0 0 1 1.63-2.35 7.22 7.22 0 0 1 2.44-1.49 8.605 8.605 0 0 1 3.02-.52c1.12 0 2.16.17 3.12.51.96.34 1.74.797 2.34 1.37l-2.16 2.46c-.333-.387-.773-.703-1.32-.95s-1.167-.37-1.86-.37c-.6 0-1.153.11-1.66.33-.507.22-.947.527-1.32.92-.373.393-.663.86-.87 1.4-.207.54-.31 1.13-.31 1.77 0 .653.093 1.253.28 1.8.187.547.463 1.017.83 1.41.367.393.82.7 1.36.92.54.22 1.157.33 1.85.33.4 0 .78-.03 1.14-.09.36-.06.693-.157 1-.29V21.4h-2.7v-2.76h5.84v7.5zm13.18-4.16c0 .813-.147 1.55-.44 2.21a4.955 4.955 0 0 1-1.2 1.68 5.493 5.493 0 0 1-1.76 1.07c-.667.253-1.38.38-2.14.38a5.998 5.998 0 0 1-2.13-.38 5.353 5.353 0 0 1-1.76-1.07c-.5-.46-.897-1.02-1.19-1.68-.293-.66-.44-1.397-.44-2.21s.147-1.547.44-2.2a4.94 4.94 0 0 1 1.19-1.66c.5-.453 1.087-.8 1.76-1.04a6.296 6.296 0 0 1 2.13-.36c.76 0 1.473.12 2.14.36s1.253.587 1.76 1.04a4.875 4.875 0 0 1 1.2 1.66c.293.653.44 1.387.44 2.2zm-3.16 0c0-.32-.053-.633-.16-.94a2.486 2.486 0 0 0-.46-.81 2.252 2.252 0 0 0-1.76-.79c-.387 0-.727.073-1.02.22a2.225 2.225 0 0 0-.73.57c-.193.233-.34.503-.44.81a3.014 3.014 0 0 0 0 1.88c.1.307.25.583.45.83s.447.443.74.59c.293.147.633.22 1.02.22s.727-.073 1.02-.22c.293-.147.54-.343.74-.59.2-.247.35-.523.45-.83.1-.307.15-.62.15-.94zm5.28 5.02V11.88h3.32V27h-3.32zm11.8-4.34h-.42c-.36 0-.723.017-1.09.05a4.483 4.483 0 0 0-.98.19c-.287.093-.523.23-.71.41-.187.18-.28.417-.28.71 0 .187.043.347.13.48.087.133.197.24.33.32a1.4 1.4 0 0 0 .46.17c.173.033.34.05.5.05.667 0 1.177-.183 1.53-.55.353-.367.53-.863.53-1.49v-.34zm-6.02-4.26c.587-.56 1.27-.98 2.05-1.26.78-.28 1.577-.42 2.39-.42.84 0 1.55.103 2.13.31.58.207 1.05.527 1.41.96.36.433.623.98.79 1.64.167.66.25 1.443.25 2.35V27h-3v-1.06h-.06c-.253.413-.637.733-1.15.96-.513.227-1.07.34-1.67.34-.4 0-.813-.053-1.24-.16a3.632 3.632 0 0 1-1.17-.52 2.816 2.816 0 0 1-.87-.96c-.227-.4-.34-.893-.34-1.48 0-.72.197-1.3.59-1.74.393-.44.9-.78 1.52-1.02s1.31-.4 2.07-.48c.76-.08 1.5-.12 2.22-.12v-.16c0-.493-.173-.857-.52-1.09-.347-.233-.773-.35-1.28-.35-.467 0-.917.1-1.35.3-.433.2-.803.44-1.11.72l-1.66-1.78zm18 8.6v-5.44c0-.28-.023-.547-.07-.8a2.205 2.205 0 0 0-.23-.67 1.193 1.193 0 0 0-.45-.46c-.193-.113-.437-.17-.73-.17s-.55.057-.77.17c-.22.113-.403.27-.55.47-.147.2-.257.43-.33.69-.073.26-.11.53-.11.81V27h-3.3v-9.96h3.18v1.38h.04c.12-.213.277-.423.47-.63.193-.207.42-.383.68-.53.26-.147.543-.267.85-.36.307-.093.633-.14.98-.14.667 0 1.233.12 1.7.36.467.24.843.55 1.13.93.287.38.493.817.62 1.31.127.493.19.987.19 1.48V27h-3.3zm16.34-.94c0 .973-.14 1.82-.42 2.54-.28.72-.673 1.317-1.18 1.79-.507.473-1.123.827-1.85 1.06-.727.233-1.53.35-2.41.35-.88 0-1.783-.133-2.71-.4s-1.73-.653-2.41-1.16l1.64-2.34c.48.427 1.01.743 1.59.95.58.207 1.15.31 1.71.31.96 0 1.67-.253 2.13-.76.46-.507.69-1.18.69-2.02v-.6h-.06c-.307.4-.72.72-1.24.96s-1.113.36-1.78.36c-.76 0-1.433-.137-2.02-.41a4.431 4.431 0 0 1-1.49-1.11 4.858 4.858 0 0 1-.93-1.63 6.012 6.012 0 0 1-.32-1.97c0-.693.107-1.353.32-1.98.213-.627.523-1.18.93-1.66.407-.48.903-.863 1.49-1.15.587-.287 1.253-.43 2-.43.627 0 1.227.127 1.8.38a3.12 3.12 0 0 1 1.38 1.18h.04v-1.28h3.1v9.02zm-3.12-4.1c0-.333-.057-.653-.17-.96a2.441 2.441 0 0 0-.49-.81 2.317 2.317 0 0 0-.76-.55 2.391 2.391 0 0 0-1-.2c-.373 0-.703.067-.99.2-.287.133-.53.313-.73.54-.2.227-.353.493-.46.8-.107.307-.16.633-.16.98 0 .333.053.653.16.96.107.307.26.577.46.81.2.233.443.42.73.56.287.14.617.21.99.21a2.36 2.36 0 0 0 1.77-.76c.207-.227.367-.493.48-.8.113-.307.17-.633.17-.98zM89.48 50h-3.42L80.7 35.84h3.84l3.28 10.04h.08l3.26-10.04h3.78L89.48 50zm9.64-13.14c0 .253-.05.49-.15.71-.1.22-.233.41-.4.57a1.948 1.948 0 0 1-1.33.52c-.533 0-.98-.177-1.34-.53a1.717 1.717 0 0 1-.54-1.27c0-.24.047-.47.14-.69.093-.22.227-.41.4-.57.173-.16.373-.29.6-.39a1.948 1.948 0 0 1 2.07.37c.167.16.3.35.4.57.1.22.15.457.15.71zM95.6 50v-9.96h3.28V50H95.6zm12.74-6.12c0-.52-.163-.967-.49-1.34-.327-.373-.817-.56-1.47-.56-.32 0-.613.05-.88.15-.267.1-.5.237-.7.41-.2.173-.36.377-.48.61-.12.233-.187.477-.2.73h4.22zm3.02 1.26v.4c0 .133-.007.26-.02.38h-7.22c.027.28.11.533.25.76.14.227.32.423.54.59.22.167.467.297.74.39.273.093.557.14.85.14.52 0 .96-.097 1.32-.29.36-.193.653-.443.88-.75l2.28 1.44a4.613 4.613 0 0 1-1.85 1.57c-.767.367-1.657.55-2.67.55a6.371 6.371 0 0 1-2.12-.35 5.148 5.148 0 0 1-1.75-1.02 4.723 4.723 0 0 1-1.18-1.65c-.287-.653-.43-1.4-.43-2.24 0-.813.14-1.55.42-2.21.28-.66.66-1.22 1.14-1.68a5.082 5.082 0 0 1 1.7-1.07 5.814 5.814 0 0 1 2.12-.38c.733 0 1.407.123 2.02.37s1.14.603 1.58 1.07c.44.467.783 1.033 1.03 1.7s.37 1.427.37 2.28zm5.6-2.64v3.8c0 .467.09.817.27 1.05.18.233.503.35.97.35.16 0 .33-.013.51-.04.18-.027.33-.067.45-.12l.04 2.4c-.227.08-.513.15-.86.21s-.693.09-1.04.09c-.667 0-1.227-.083-1.68-.25-.453-.167-.817-.407-1.09-.72a2.823 2.823 0 0 1-.59-1.12 5.43 5.43 0 0 1-.18-1.45v-4.2h-1.6v-2.46h1.58v-2.62h3.22v2.62h2.34v2.46h-2.34zm10.42 7.5v-5.44c0-.28-.023-.547-.07-.8a2.205 2.205 0 0 0-.23-.67 1.193 1.193 0 0 0-.45-.46c-.193-.113-.437-.17-.73-.17s-.55.057-.77.17c-.22.113-.403.27-.55.47-.147.2-.257.43-.33.69-.073.26-.11.53-.11.81V50h-3.3v-9.96h3.18v1.38h.04c.12-.213.277-.423.47-.63.193-.207.42-.383.68-.53.26-.147.543-.267.85-.36.307-.093.633-.14.98-.14.667 0 1.233.12 1.7.36.467.24.843.55 1.13.93.287.38.493.817.62 1.31.127.493.19.987.19 1.48V50h-3.3zm11.66-4.34h-.42c-.36 0-.723.017-1.09.05a4.483 4.483 0 0 0-.98.19c-.287.093-.523.23-.71.41-.187.18-.28.417-.28.71 0 .187.043.347.13.48.087.133.197.24.33.32a1.4 1.4 0 0 0 .46.17c.173.033.34.05.5.05.667 0 1.177-.183 1.53-.55.353-.367.53-.863.53-1.49v-.34zm-6.02-4.26c.587-.56 1.27-.98 2.05-1.26.78-.28 1.577-.42 2.39-.42.84 0 1.55.103 2.13.31.58.207 1.05.527 1.41.96.36.433.623.98.79 1.64.167.66.25 1.443.25 2.35V50h-3v-1.06h-.06c-.253.413-.637.733-1.15.96-.513.227-1.07.34-1.67.34-.4 0-.813-.053-1.24-.16a3.632 3.632 0 0 1-1.17-.52 2.816 2.816 0 0 1-.87-.96c-.227-.4-.34-.893-.34-1.48 0-.72.197-1.3.59-1.74.393-.44.9-.78 1.52-1.02s1.31-.4 2.07-.48c.76-.08 1.5-.12 2.22-.12v-.16c0-.493-.173-.857-.52-1.09-.347-.233-.773-.35-1.28-.35-.467 0-.917.1-1.35.3-.433.2-.803.44-1.11.72l-1.66-1.78zM157.2 50v-5.44c0-.28-.02-.55-.06-.81a1.934 1.934 0 0 0-.22-.67 1.265 1.265 0 0 0-.43-.45c-.18-.113-.417-.17-.71-.17-.28 0-.523.06-.73.18-.207.12-.38.28-.52.48a2.1 2.1 0 0 0-.31.69c-.067.26-.1.53-.1.81V50h-3.28v-5.68c0-.573-.113-1.027-.34-1.36-.227-.333-.587-.5-1.08-.5-.52 0-.923.207-1.21.62-.287.413-.43.92-.43 1.52V50h-3.3v-9.96h3.18v1.38h.04c.12-.213.27-.42.45-.62s.397-.377.65-.53a3.596 3.596 0 0 1 1.88-.51c.72 0 1.33.147 1.83.44.5.293.89.713 1.17 1.26.333-.52.76-.933 1.28-1.24.52-.307 1.153-.46 1.9-.46.68 0 1.25.123 1.71.37.46.247.83.567 1.11.96.28.393.483.833.61 1.32.127.487.19.963.19 1.43V50h-3.28z"
        fill="#23252C"
      />
      <g transform="translate(-1 1)">
        <path
          d="M13.63 38.305s-.837 10.944-4.521 13.962c0 0 11.007 4.684 14.76 4.391l-10.24-18.353z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M14.443 33.463s-6.555 3.266-6.08 5.72c.746 3.806 8.001-1.509 8.001-1.509l-1.92-4.21z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#9BD6D8"
          fillRule="nonzero"
        />
        <path
          d="M13.38 33.418l-3.457 2.883s1.853 2.882 2.599 4.166c0 0 3.255-1.171 4.453-2.365l-3.594-4.684z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M43.895 29.86s4-4.076 5.74-3.625c3.278.855-2.237 6.913-2.237 6.913l-3.503-3.288z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#9BD6D8"
          fillRule="nonzero"
        />
        <path
          d="M43.962 29.995l2.848-2.544s2.035 2.59 3.097 3.625c0 0-2.238 3.31-3.707 4.189l-2.238-5.27z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M29.361 29.815s.95 3.919 2.78 3.58c1.808-.337.836-4.278.836-4.278"
          stroke="#414143"
          strokeWidth={1.157}
          fill="#FFF"
          fillRule="nonzero"
        />
        <ellipse
          stroke="#414143"
          strokeWidth={0.6}
          fill="#A56F3F"
          fillRule="nonzero"
          transform="rotate(-15.201 28.028 20.99)"
          cx={28.028}
          cy={20.989}
          rx={27.259}
          ry={5.832}
        />
        <g fillRule="nonzero">
          <path
            d="M15.664 10.72a3.624 3.624 0 0 0-.746-.812 3.87 3.87 0 0 0-5.402.518 3.835 3.835 0 0 0 .52 5.382c.293.248.61.428.949.563l4.679-5.652z"
            stroke="#414143"
            strokeWidth={0.6}
            fill="#9BD6D8"
          />
          <path
            d="M13.81 11.845a1.696 1.696 0 0 0-.339-.36 1.718 1.718 0 0 0-2.396.225 1.703 1.703 0 0 0 .226 2.387c.136.113.272.203.43.248l2.08-2.5z"
            fill="#414143"
          />
        </g>
        <g fillRule="nonzero">
          <path
            d="M35.645 7.251c.022-.36.067-.72.203-1.08.678-2.005 2.848-3.063 4.86-2.388a3.805 3.805 0 0 1 2.395 4.842c-.113.36-.293.698-.497.99l-6.961-2.364z"
            stroke="#414143"
            strokeWidth={0.6}
            fill="#9BD6D8"
          />
          <path
            d="M37.837 7.229c0-.158.045-.316.09-.473.294-.879 1.266-1.351 2.148-1.059a1.694 1.694 0 0 1 1.062 2.14 1.29 1.29 0 0 1-.226.428l-3.074-1.036z"
            fill="#414143"
          />
        </g>
        <path
          d="M23.665 9.706c4.385-1.194 15.076-2.77 18.964 7.904 3.435 9.435 7.3 28.464-1.74 34.206-9.042 5.743-18.987 3.851-23.033.023-4.046-3.828-3.345-13.196-4.25-17.745-.903-4.549-3.503-14.547 1.493-20.132 2.396-2.68 5.967-3.536 8.566-4.256z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#9BD6D8"
          fillRule="nonzero"
        />
        <g transform="translate(15.144 12.16)" fillRule="nonzero">
          <ellipse
            stroke="#414143"
            strokeWidth={0.6}
            fill="#FFF"
            cx={22.58}
            cy={6.756}
            rx={6.577}
            ry={6.553}
          />
          <ellipse
            stroke="#414143"
            strokeWidth={0.6}
            fill="#FFF"
            cx={6.713}
            cy={9.435}
            rx={6.577}
            ry={6.553}
          />
          <ellipse fill="#414143" cx={6.713} cy={9.953} rx={2.305} ry={2.297} />
          <ellipse fill="#FFF" cx={7.753} cy={9.728} rx={1} ry={1} />
          <ellipse fill="#414143" cx={22.58} cy={7.454} rx={2.305} ry={2.297} />
          <ellipse fill="#FFF" cx={23.62} cy={8.107} rx={1} ry={1} />
        </g>
        <path
          d="M26.513 15.358c11.753-3.175 22.15-4.234 26.151-2.86L23.168.135c-.543-.225-1.153-.067-1.492.405L2.17 26.235c-.113.135-.136.292-.136.45 1.967-3.22 11.934-7.927 24.479-11.327z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#E4B480"
          fillRule="nonzero"
        />
        <g fillRule="nonzero">
          <path
            d="M29.293 28.014s.791 3.265 2.78 2.86c1.786-.36 1.198-3.356 1.198-3.356l-3.978.496zM32.164 30.806l-.86-3.535"
            stroke="#414143"
            strokeWidth={0.6}
            fill="#FFF"
          />
          <path
            d="M29.27 28.78c.136.044.272 0 .385-.068.316-.203 1.22-.72 1.921-.81a4.163 4.163 0 0 1 1.695.112.673.673 0 0 0 .362.045c.52-.068.678-.878.542-1.486-.203-.901-1.017-1.6-2.78-1.397-2.622.293-3.051 1.644-2.87 2.658.045.36.474.878.746.945z"
            stroke="#414143"
            strokeWidth={0.6}
            fill="#E4B480"
          />
          <path
            d="M30.717 23.893c1.447-.27 1.921-.068 2.17.653.203.585-.452 1.531-2.645 1.396-1.763-.113-1.22-1.734.475-2.05z"
            fill="#414143"
          />
        </g>
        <path
          d="M21.744.45c-.023.023-.045.045-.068.09L2.17 26.235c-.113.135-.136.292-.136.45 1.13-1.846 4.882-4.188 10.24-6.485L21.743.45z"
          fill="#C1966E"
          fillRule="nonzero"
        />
        <path
          d="M14.67 43.53s.745 12.407 0 13.15c0 0 7.978 3.13 18.76 1.937l-.362-7.566-18.399-7.522z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#FFF"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M45.635 42.989V56.14s-4.973 2.094-12.273 2.477l-.294-7.566 12.567-8.062z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#FFF"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          d="M26.513 15.358c11.753-3.175 22.15-4.234 26.151-2.86L23.168.135c-.543-.225-1.153-.067-1.492.405L2.17 26.235c-.113.135-.136.292-.136.45 1.967-3.22 11.934-7.927 24.479-11.327z"
          stroke="#414143"
          strokeWidth={0.6}
        />
        <path
          d="M46.584 36.931c-.384-1.531-.881-8.107-.881-8.107-3.752 4.594-12.048 6.26-12.048 6.26l-.813 2.973-2.215-2.049c-9.403 1.779-17.314-3.648-17.314-3.648s.61 7.229 1.198 8.805c1.153 3.288 6.035 15.335 11.234 15.516 6.215.225 17.517-1.014 24.998-5.54-.022-.023-3.368-9.548-4.159-14.21z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#E74761"
          fillRule="nonzero"
          strokeLinejoin="round"
        />
        <path
          stroke="#414143"
          strokeWidth={0.6}
          fill="#FDF169"
          fillRule="nonzero"
          strokeLinejoin="round"
          d="M33.09 41.142l1.673 2.477 3.232.113-2.147 2.23.814 2.814-2.984-1.08-2.735 1.598.294-2.905-2.509-1.824 3.164-.698z"
        />
        <path
          d="M50.675 26.212l3.865-5.134"
          stroke="#414143"
          strokeWidth={0.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M57.411 16.71l-4.837 6.935s4.204 2.05 9.697 3.49l3.593-8.219c-3.074 0-5.891-.736-8.453-2.207z"
          stroke="#414143"
          strokeWidth={0.6}
          fill="#19A1A2"
          fillRule="nonzero"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M58.202 21.821c-.18-.068-.249-.09-.362-.135l.272-.63c.135.067.203.112.452.225l.294.112c.18.068.316.135.474.18-.068.135-.135.248-.226.473l-.18.406c-.114.247-.159.36-.204.54a1.517 1.517 0 0 1-.543.023 2.697 2.697 0 0 1-.813-.203c-.452-.203-.746-.473-.904-.833-.159-.383-.136-.879.09-1.352.407-.945 1.22-1.283 2.125-.9.452.18.723.473.836.855.045.158.068.293.045.473l-.79-.135a.47.47 0 0 0-.046-.315.635.635 0 0 0-.317-.27c-.452-.203-.858.022-1.107.63-.136.338-.18.63-.09.833.067.18.203.316.429.406.18.09.362.112.565.09l.18-.405-.18-.068zM59.355 22.316c.294-.72.95-.968 1.672-.675.724.315.995.946.678 1.666-.293.698-.971.969-1.695.676-.7-.315-.949-.968-.655-1.667zm.678.27c-.158.406-.09.721.226.834.316.135.588-.023.746-.428.18-.405.09-.72-.226-.833-.294-.113-.565.045-.746.428z" />
        </g>
      </g>
    </g>
  </svg>
)

export default Logo
