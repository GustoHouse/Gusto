import React, { Component } from 'react';
import './banner.scss';

class Banner extends Component {
    render() {
      return (
        <section className="banner">
          <h1>
            <span>Build Fascinating Things</span>
            <strong>With Gusto</strong>
          </h1>
          
          <div className="languages">
            <svg id="react" viewBox="0 0 79 30" fill="none" ><path d="M27.6885 9.74683C27.3367 9.64128 26.9849 9.50055 26.5979 9.395C26.6682 9.14873 26.7034 8.90245 26.7738 8.65617C27.583 4.68057 27.0552 1.44379 25.2258 0.388317C23.4666 -0.631972 20.5817 0.4235 17.6967 2.95663C17.4153 3.20291 17.1338 3.44918 16.8524 3.73064C16.6764 3.55473 16.5005 3.37882 16.2894 3.20291C13.2638 0.493865 10.2029 -0.631972 8.3734 0.4235C6.61429 1.44379 6.08655 4.46947 6.82538 8.23399C6.89574 8.62099 6.96611 8.97282 7.07166 9.35982C6.64947 9.46537 6.22728 9.6061 5.84027 9.74683C2.28685 10.9782 0 12.9484 0 14.9538C0 17.0296 2.46277 19.1405 6.15692 20.4071C6.47356 20.5126 6.75502 20.6182 7.07166 20.6885C6.96611 21.0756 6.89574 21.4977 6.7902 21.8847C6.08655 25.6141 6.64947 28.5342 8.3734 29.5545C10.1677 30.61 13.2286 29.5193 16.1839 26.951C16.4302 26.7399 16.6413 26.5288 16.8875 26.3177C17.169 26.5992 17.4856 26.8806 17.8023 27.1621C20.6521 29.6249 23.5018 30.61 25.2609 29.6249C27.0552 28.5694 27.6533 25.403 26.8793 21.5681C26.809 21.2866 26.7386 20.97 26.6682 20.6534L27.3015 20.4423C31.1716 19.1757 33.6695 17.0999 33.6695 14.989C33.6695 12.9836 31.3123 11.0134 27.6885 9.74683ZM18.6115 4.08247C21.1094 1.90116 23.4315 1.05678 24.4869 1.65488C25.6128 2.32335 26.0701 4.92684 25.3313 8.37472C25.2961 8.58581 25.2258 8.83209 25.1906 9.04318C23.7129 8.69136 22.2001 8.48026 20.6872 8.33953C19.8077 7.10815 18.8578 5.91195 17.8375 4.78611C18.0837 4.53984 18.3652 4.29356 18.6115 4.08247ZM10.8714 18.4721C11.2232 19.0702 11.575 19.6331 11.9268 20.196C10.8714 20.0904 9.85106 19.9145 8.83078 19.7034C9.14742 18.6832 9.49924 17.698 9.92143 16.7129C10.2381 17.311 10.5547 17.874 10.8714 18.4721ZM8.86596 10.4505C9.88625 10.2394 10.9065 10.0635 11.9268 9.92274C11.5328 10.4575 11.181 11.0239 10.8714 11.6115C10.5547 12.1744 10.2381 12.7725 9.92143 13.3706C9.53442 12.4207 9.14742 11.4356 8.86596 10.4505ZM10.6603 15.0242C11.1176 14.1094 11.575 13.1947 12.1027 12.3151C12.6305 11.4356 13.1582 10.556 13.7211 9.71165C15.7617 9.57092 17.8023 9.57092 19.878 9.71165C20.441 10.556 21.0039 11.4356 21.4964 12.3151C22.0242 13.1947 22.4815 14.1094 22.9389 15.0242C22.5167 15.9389 22.0242 16.8537 21.5316 17.7332C21.0039 18.6128 20.4761 19.4923 19.9132 20.3367C18.9281 20.4071 17.8726 20.4423 16.8172 20.4423C15.7617 20.4423 14.7414 20.4071 13.7563 20.3367C13.1582 19.4923 12.6305 18.6128 12.1027 17.7332C11.575 16.8537 11.1176 15.9389 10.6603 15.0242ZM22.763 18.4369C23.1148 17.874 23.4315 17.2759 23.7481 16.6778C24.1703 17.6629 24.5573 18.648 24.8739 19.6331C23.8185 19.8794 22.7982 20.0553 21.7427 20.1608C22.0945 19.5979 22.4464 19.035 22.763 18.4369ZM23.7129 13.3002C23.4315 12.7373 23.1148 12.1744 22.763 11.5763C22.4464 11.0134 22.0945 10.4505 21.7427 9.88756C22.8334 10.0283 23.8536 10.2042 24.8036 10.4153C24.4869 11.4004 24.1351 12.3855 23.7129 13.3002ZM16.8524 5.8064C17.556 6.58041 18.2245 7.35443 18.8226 8.1988C17.4856 8.12844 16.1839 8.12844 14.847 8.1988C15.4802 7.38961 16.1487 6.58041 16.8524 5.8064ZM9.07705 1.69006C10.2029 1.0216 12.7008 1.97152 15.3395 4.29356C15.5154 4.43429 15.6913 4.6102 15.8321 4.75093C14.8118 5.87677 13.8267 7.07297 12.9471 8.30435C11.4343 8.44508 9.92143 8.65617 8.44377 9.008C8.3734 8.69136 8.30304 8.33953 8.23267 7.98771C7.59939 4.75093 8.02158 2.32335 9.07705 1.69006ZM7.45866 19.3868C7.14202 19.2812 6.86056 19.1757 6.61429 19.1053C5.17181 18.648 3.87006 17.9443 2.67386 17.0296C1.82948 16.3259 1.40729 15.5871 1.40729 15.0242C1.40729 13.7928 3.23678 12.2448 6.29764 11.1541C6.68465 11.0134 7.07166 10.9078 7.45866 10.8023C7.91603 12.2448 8.44377 13.6873 9.11223 15.0594C8.47895 16.4667 7.91603 17.9091 7.45866 19.3868ZM15.234 25.9659C14.1433 26.9158 12.8416 27.725 11.4695 28.2879C10.4492 28.6398 9.60479 28.6749 9.11223 28.3935C8.05676 27.7954 7.59939 25.403 8.19749 22.2366C8.26786 21.8496 8.33822 21.4977 8.44377 21.1107C9.95661 21.4274 11.4695 21.6385 12.9823 21.7792C13.8619 23.0458 14.847 24.242 15.8672 25.3678C15.6562 25.5789 15.4451 25.7548 15.234 25.9659ZM16.8875 24.2771C16.1839 23.5031 15.4802 22.6939 14.847 21.8496C15.4802 21.8847 16.1487 21.8847 16.8172 21.8847C17.5208 21.8847 18.1893 21.8847 18.8577 21.8496C18.2245 22.6939 17.5912 23.5031 16.8875 24.2771ZM25.6479 26.2825C25.4369 27.3732 25.0499 28.0768 24.5573 28.3583C23.5018 28.9564 21.215 28.1824 18.7874 26.0714C18.5059 25.8252 18.2245 25.5789 17.943 25.2974C18.9633 24.1716 19.9132 22.9754 20.7576 21.7088C22.3056 21.5681 23.8185 21.357 25.3313 21.0052C25.3313 21.3218 25.4017 21.5681 25.472 21.8496C25.7887 23.3272 25.859 24.8049 25.6479 26.2825ZM26.8442 19.1053C26.6682 19.1757 26.4571 19.2109 26.2812 19.2812C25.8239 17.8036 25.2258 16.3963 24.5925 15.0242C25.2258 13.6521 25.7887 12.2448 26.246 10.8023C26.5979 10.9078 26.9145 11.0134 27.2312 11.1189C30.3624 12.1744 32.2622 13.7928 32.2622 14.989C32.2271 16.2907 30.1865 17.9795 26.8442 19.1053Z" fill="#000000"></path><path d="M43.8724 15.0932H40.7412V19.6669H39.3339V8.23267H43.5558C45.7723 8.23267 47.3555 9.28814 47.3555 11.4694V11.8564C47.3555 13.4045 46.5463 14.3896 45.3149 14.8118L48.0239 19.6669H46.4407L43.8724 15.0932ZM43.4854 13.8267C44.9279 13.8267 45.9482 13.1582 45.9482 11.8564V11.5046C45.9482 10.1677 44.9279 9.49923 43.4854 9.49923H40.7412V13.8267H43.4854ZM50.5219 16.395C50.5219 17.6967 51.3311 18.717 52.7384 18.717C53.8994 18.717 54.603 18.1189 54.7086 17.2394H56.0455C55.9048 18.7522 54.603 19.8428 52.7736 19.8428C50.5922 19.8428 49.2201 18.4356 49.2201 16.0783V15.5506C49.2201 13.2286 50.5571 11.7861 52.7384 11.7861C54.8493 11.7861 56.0807 13.1582 56.0807 15.3747V16.2542H50.5219V16.395ZM50.5219 15.058V15.1284H54.7086V14.9525C54.7086 13.8267 54.1105 12.8767 52.7032 12.8767C51.5774 12.8064 50.5922 13.6859 50.5219 14.8118V15.058ZM63.9264 14.9525V19.7021H62.5894V18.8929C61.9561 19.5262 61.0766 19.878 60.1618 19.8428C58.7546 19.8428 57.6991 19.0337 57.6991 17.5912C57.6991 15.9024 59.036 15.2691 60.7599 15.2691C61.358 15.2691 61.9562 15.3043 62.5543 15.3747V14.7766C62.5543 13.6508 62.0617 12.9119 60.9359 12.9119C60.0211 12.8767 59.2471 13.5452 59.2119 14.4599V14.6007H57.875C57.875 13.1934 58.9657 11.8213 60.9007 11.8213C62.9413 11.7509 63.9264 12.9471 63.9264 14.9525ZM59.036 17.5208C59.036 18.2948 59.5989 18.717 60.5489 18.717C61.3581 18.6818 62.0969 18.33 62.6246 17.7319V16.4653C62.0617 16.395 61.4636 16.3598 60.9007 16.3598C59.7397 16.3246 59.036 16.7116 59.036 17.5208ZM72.8627 14.7766H71.6313C71.5961 13.7211 70.7166 12.8767 69.6611 12.8767H69.5907C68.1482 12.8767 67.3391 13.897 67.3391 15.4802V16.1135C67.3391 17.6967 68.1482 18.717 69.5907 18.717C70.611 18.7874 71.5258 18.0134 71.5961 16.9931V16.9579H72.8627C72.6868 18.7522 71.3498 19.8428 69.5907 19.8428C67.4094 19.8428 66.0021 18.5059 66.0021 16.0783V15.5506C66.0021 13.123 67.4094 11.7861 69.5907 11.7861C71.4202 11.7509 72.7571 12.9119 72.8627 14.7766ZM78.8085 19.6318C78.3159 19.8077 77.8234 19.878 77.2957 19.8428C75.9587 19.8428 75.0792 19.0688 75.0792 17.4153V13.0175H73.6719V11.8916H75.0792V9.18259H76.4161V11.8916H78.703V13.0175H76.4161L76.3809 17.169C76.3809 18.2596 76.8735 18.6115 77.6827 18.6115C78.0345 18.6115 78.4215 18.5411 78.7381 18.4004L78.8085 19.6318Z" fill="#000000"></path><path d="M16.8524 11.9761C18.5059 11.9761 19.878 13.313 19.878 15.0018C19.878 16.6553 18.5411 18.0274 16.8524 18.0274C15.1988 18.0274 13.8267 16.6905 13.8267 15.0018C13.8619 13.313 15.1988 11.9761 16.8524 11.9761Z" fill="#000000"></path></svg>
            <svg id="php" viewBox="0 0 60 30" fill="none" ><path d="M4.74756 6.3255H13.6458C16.2577 6.34757 18.1502 7.09645 19.3234 8.57221C20.4965 10.048 20.8839 12.0634 20.4855 14.6185C20.3305 15.7859 19.9874 16.9313 19.4562 18.0546C18.9471 19.178 18.2388 20.1912 17.3313 21.0943C16.2245 22.2396 15.0403 22.9665 13.7786 23.2749C12.5169 23.5833 11.2109 23.7375 9.86073 23.7375H5.87645L4.61475 30.015H-0.000379562L4.74756 6.3255ZM8.63224 10.092L6.6401 20.004C6.7729 20.026 6.9057 20.037 7.03853 20.037H7.50336C9.62831 20.059 11.3991 19.8498 12.8157 19.4092C14.2324 18.9467 15.1841 17.3388 15.6712 14.5854C16.0696 12.2727 15.6711 10.9401 14.4759 10.5876C13.3027 10.2352 11.8307 10.07 10.0599 10.092C9.79431 10.114 9.53976 10.1251 9.29629 10.1251C9.07493 10.1251 8.84251 10.1251 8.59904 10.1251L8.63224 10.092Z" fill="#000000"></path><path d="M25.744 0.0167236H30.3259L29.031 6.32734H33.1481C35.4059 6.37141 37.0881 6.83397 38.1949 7.71502C39.3238 8.59612 39.6558 10.2701 39.191 12.7371L36.9664 23.7393H32.3181L34.443 13.2327C34.6643 12.1314 34.5979 11.3494 34.2438 10.8868C33.8896 10.4243 33.1259 10.193 31.9528 10.193L28.2674 10.16L25.5448 23.7393H20.9629L25.744 0.0167236Z" fill="#000000"></path><path d="M44.1118 6.3255H53.0101C55.622 6.34757 57.5145 7.09645 58.6877 8.57221C59.8608 10.048 60.2482 12.0634 59.8498 14.6185C59.6948 15.7859 59.3517 16.9313 58.8205 18.0546C58.3113 19.178 57.603 20.1912 56.6955 21.0943C55.5888 22.2396 54.4046 22.9665 53.1429 23.2749C51.8812 23.5833 50.5752 23.7375 49.225 23.7375H45.2407L43.979 30.015H39.3639L44.1118 6.3255ZM47.9965 10.092L46.0043 20.004C46.1371 20.026 46.27 20.037 46.4028 20.037H46.8676C48.9926 20.059 50.7633 19.8498 52.18 19.4092C53.5966 18.9467 54.5484 17.3388 55.0354 14.5854C55.4338 12.2727 55.0354 10.9401 53.8401 10.5876C52.6669 10.2352 51.1949 10.07 49.4242 10.092C49.1586 10.114 48.904 10.1251 48.6605 10.1251C48.4392 10.1251 48.2068 10.1251 47.9633 10.1251L47.9965 10.092Z" fill="#000000"></path></svg>
            <svg id="wordpress" viewBox="0 0 148 30" fill="none" ><path d="M83.6324 11.1334H77.6656V11.7662C79.5321 11.7662 79.8321 12.1662 79.8321 14.5327V18.7993C79.8321 21.1659 79.5321 21.5995 77.6656 21.5995C76.2328 21.3995 75.2655 20.6331 73.9327 19.1657L72.3998 17.4993C74.4663 17.132 75.5664 15.8328 75.5664 14.3654C75.5664 12.5326 73.9999 11.1325 71.067 11.1325H65.2003V11.7653C67.0668 11.7653 67.3668 12.1653 67.3668 14.5318V18.7985C67.3668 21.165 67.0668 21.5986 65.2003 21.5986V22.2314H71.8334V21.5986C69.967 21.5986 69.6669 21.165 69.6669 18.7985V17.5984H70.2333L73.9336 22.2314H83.6333C88.3999 22.2314 90.4664 19.6985 90.4664 16.6647C90.4655 13.6335 88.399 11.1334 83.6324 11.1334ZM69.6661 16.5665V12.1335H71.0325C72.5326 12.1335 73.199 13.1663 73.199 14.3663C73.199 15.5328 72.5317 16.5665 71.0325 16.5665H69.6661ZM83.7324 21.2004H83.4987C82.2987 21.2004 82.1323 20.9004 82.1323 19.3666V12.1335C82.1323 12.1335 83.5987 12.1335 83.7324 12.1335C87.1989 12.1335 87.8326 14.6663 87.8326 16.6328C87.8317 18.6666 87.1989 21.2004 83.7324 21.2004Z" fill="#000000"></path><path d="M46.6337 17.8001L48.9339 10.9997C49.6012 9.03326 49.3011 8.46686 47.1674 8.46686V7.79956H53.4341V8.46686C51.334 8.46686 50.834 8.96689 50.0012 11.3998L46.201 22.7996H45.7682L42.368 12.3662L38.9014 22.7996H38.4678L34.7675 11.3998C33.9675 8.966 33.4338 8.46686 31.501 8.46686V7.79956H38.9014V8.46686C36.9349 8.46686 36.4013 8.93326 37.1013 10.9997L39.3342 17.8001L42.7007 7.79956H43.3344L46.6337 17.8001Z" fill="#000000"></path><path d="M57.9662 22.6668C54.2997 22.6668 51.2995 19.9667 51.2995 16.6665C51.2995 13.3999 54.2997 10.6998 57.9662 10.6998C61.6328 10.6998 64.633 13.3999 64.633 16.6665C64.633 19.9667 61.6328 22.6668 57.9662 22.6668ZM57.9662 11.7335C54.8997 11.7335 53.8333 14.5 53.8333 16.6665C53.8333 18.8666 54.9006 21.6004 57.9662 21.6004C61.0664 21.6004 62.1329 18.8675 62.1329 16.6665C62.1329 14.5 61.0664 11.7335 57.9662 11.7335Z" fill="#000000"></path><path d="M98.6979 21.5668V22.2332H91.0647V21.5668C93.2984 21.5668 93.6985 21.0003 93.6985 17.6665V12.3335C93.6985 8.99963 93.2984 8.46686 91.0647 8.46686V7.79956H97.9642C101.397 7.79956 103.298 9.56604 103.298 11.9334C103.298 14.2336 101.398 16.0337 97.9642 16.0337H96.0641V17.6665C96.065 21.0003 96.465 21.5668 98.6979 21.5668ZM97.9651 8.99963H96.065V14.8H97.9651C99.8316 14.8 100.698 13.4999 100.698 11.9334C100.698 10.3342 99.8316 8.99963 97.9651 8.99963Z" fill="#000000"></path><path d="M126.198 19.1002L126.031 19.7003C125.731 20.8003 125.364 21.2004 122.998 21.2004H122.531C120.798 21.2004 120.498 20.8003 120.498 18.4338V16.901C123.098 16.901 123.298 17.1338 123.298 18.8675H123.932V13.9008H123.298C123.298 15.6345 123.098 15.8673 120.498 15.8673V12.1335H122.331C124.698 12.1335 125.065 12.5335 125.364 13.6335L125.531 14.2663H126.064L125.831 11.1334H116.032V11.7662C117.898 11.7662 118.198 12.1662 118.198 14.5327V18.7993C118.198 20.9641 117.943 21.5092 116.471 21.5871C115.072 21.3738 114.112 20.611 112.799 19.1657L111.265 17.4993C113.331 17.132 114.432 15.8328 114.432 14.3654C114.432 12.5326 112.865 11.1325 109.932 11.1325H104.065V11.7653C105.932 11.7653 106.232 12.1653 106.232 14.5318V18.7985C106.232 21.165 105.932 21.5986 104.065 21.5986V22.2314H110.699V21.5986C108.832 21.5986 108.532 21.165 108.532 18.7985V17.5984H109.098L112.799 22.2314H126.498L126.698 19.0985H126.198V19.1002ZM108.532 16.5665V12.1335H109.899C111.399 12.1335 112.065 13.1663 112.065 14.3663C112.065 15.5328 111.398 16.5665 109.899 16.5665H108.532Z" fill="#000000"></path><path d="M132.964 22.6668C131.63 22.6668 130.464 21.9668 129.963 21.5331C129.797 21.7004 129.497 22.2004 129.431 22.6668H128.797V18.0674H129.463C129.731 20.2676 131.264 21.5676 133.23 21.5676C134.296 21.5676 135.164 20.9676 135.164 19.9675C135.164 19.1011 134.396 18.4338 133.03 17.801L131.13 16.901C129.796 16.2673 128.796 15.1673 128.796 13.7008C128.796 12.1007 130.296 10.7343 132.363 10.7343C133.463 10.7343 134.396 11.1343 134.963 11.6007C135.129 11.467 135.296 11.1006 135.397 10.7006H136.029V14.6345H135.329C135.096 13.068 134.229 11.7679 132.463 11.7679C131.529 11.7679 130.663 12.3016 130.663 13.1344C130.663 14.0008 131.363 14.4672 132.963 15.2009L134.796 16.1009C136.396 16.8674 137.029 18.1011 137.029 19.1011C137.03 21.2003 135.197 22.6668 132.964 22.6668Z" fill="#000000"></path><path d="M143.043 22.6668C141.709 22.6668 140.543 21.9668 140.043 21.5331C139.876 21.7004 139.576 22.2004 139.51 22.6668H138.876V18.0674H139.543C139.81 20.2676 141.343 21.5676 143.309 21.5676C144.376 21.5676 145.243 20.9676 145.243 19.9675C145.243 19.1011 144.476 18.4338 143.109 17.801L141.209 16.901C139.875 16.2673 138.875 15.1673 138.875 13.7008C138.875 12.1007 140.375 10.7343 142.442 10.7343C143.542 10.7343 144.475 11.1343 145.042 11.6007C145.209 11.467 145.375 11.1006 145.475 10.7006H146.109V14.6345H145.409C145.175 13.068 144.308 11.7679 142.542 11.7679C141.608 11.7679 140.742 12.3016 140.742 13.1344C140.742 14.0008 141.442 14.4672 143.042 15.2009L144.875 16.1009C146.475 16.8674 147.109 18.1011 147.109 19.1011C147.11 21.2003 145.276 22.6668 143.043 22.6668Z" fill="#000000"></path><path d="M15 0.900053C16.9037 0.900053 18.7507 1.27264 20.4879 2.00808C21.3234 2.3612 22.1287 2.7984 22.8828 3.30816C23.6297 3.81261 24.3315 4.39229 24.9705 5.03039C25.6086 5.66848 26.1883 6.37117 26.6927 7.11812C27.2016 7.87215 27.6397 8.6775 27.9928 9.51295C28.7282 11.2511 29.1008 13.0972 29.1008 15.0009C29.1008 16.9045 28.7282 18.7515 27.9928 20.4888C27.6397 21.3243 27.2025 22.1296 26.6927 22.8836C26.1883 23.6306 25.6086 24.3324 24.9705 24.9714C24.3324 25.6095 23.6297 26.1892 22.8828 26.6936C22.1287 27.2025 21.3234 27.6406 20.4879 27.9937C18.7498 28.7291 16.9037 29.1017 15 29.1017C13.0963 29.1017 11.2493 28.7291 9.51206 27.9937C8.67662 27.6406 7.87126 27.2034 7.11723 26.6936C6.37029 26.1892 5.66848 25.6095 5.0295 24.9714C4.39141 24.3333 3.81173 23.6306 3.30727 22.8836C2.79839 22.1296 2.36032 21.3243 2.0072 20.4888C1.27176 18.7507 0.899168 16.9045 0.899168 15.0009C0.899168 13.0972 1.27176 11.2502 2.0072 9.51295C2.36032 8.6775 2.79751 7.87215 3.30727 7.11812C3.81173 6.37117 4.39141 5.66936 5.0295 5.03039C5.66759 4.39229 6.37029 3.81261 7.11723 3.30816C7.87126 2.79928 8.67662 2.3612 9.51206 2.00808C11.2493 1.27264 13.0963 0.900053 15 0.900053ZM15 0C6.71544 0 0 6.71544 0 15C0 23.2846 6.71544 30 15 30C23.2846 30 30 23.2846 30 15C30 6.71544 23.2846 0 15 0Z" fill="#000000"></path><path d="M2.50014 15C2.50014 19.9472 5.37554 24.2235 9.54569 26.2493L3.58251 9.91297C2.88866 11.467 2.50014 13.1875 2.50014 15ZM23.4385 14.369C23.4385 12.8238 22.8836 11.7538 22.4084 10.9219C21.7747 9.89173 21.1809 9.02 21.1809 7.98985C21.1809 6.84111 22.0517 5.77114 23.2801 5.77114C23.3359 5.77114 23.3881 5.77822 23.4421 5.78087C21.2181 3.74359 18.2551 2.49927 15.0009 2.49927C10.6334 2.49927 6.79155 4.74011 4.5569 8.13322C4.85073 8.14207 5.12685 8.14827 5.36138 8.14827C6.66853 8.14827 8.69255 7.98897 8.69255 7.98897C9.36604 7.94914 9.44569 8.93947 8.7722 9.01912C8.7722 9.01912 8.09516 9.09877 7.34202 9.13771L11.8936 22.6774L14.6292 14.4734L12.6822 9.13771C12.0087 9.09788 11.3715 9.01912 11.3715 9.01912C10.698 8.97929 10.7767 7.94914 11.4511 7.98897C11.4511 7.98897 13.515 8.14827 14.7433 8.14827C16.0505 8.14827 18.0754 7.98897 18.0754 7.98897C18.7489 7.94914 18.8285 8.93947 18.155 9.01912C18.155 9.01912 17.4771 9.09877 16.7249 9.13771L21.2402 22.5757L22.5296 18.4896C23.1031 16.7036 23.4385 15.439 23.4385 14.369ZM15.2195 16.093L11.4688 26.991C12.5892 27.3202 13.7734 27.5007 15 27.5007C16.4558 27.5007 17.8524 27.2494 19.1516 26.7918C19.1179 26.7387 19.087 26.6812 19.0622 26.6193L15.2195 16.093ZM25.9697 9.00319C26.0237 9.40144 26.0537 9.82801 26.0537 10.2882C26.0537 11.5564 25.8166 12.9822 25.1032 14.7655L21.2844 25.8042C25.0006 23.6377 27.4998 19.6118 27.4998 15C27.4998 12.8264 26.9449 10.7829 25.9697 9.00319Z" fill="#000000"></path></svg>
          </div>

          <p>As internet architects, we design and build robust websites, online stores, web and mobile apps with passion and vigor.</p>

          <a href="#start" className="btn">start building</a>

        </section>
      );
    }
  }
  
  export default Banner;