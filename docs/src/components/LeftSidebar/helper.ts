import ArrowDown from '../../assets/svg/arrowDown.svg';
import ArrowForward from '../../assets/svg/arrowForward.svg';

export const addExpandCollapseImages = (navContent: string, pageId: string) => {
    const nav = document.createElement('div');
    nav.innerHTML = navContent;
    nav.classList.add('navWrapper');
    nav.querySelectorAll('.navWrapper>.ulist>ul>li>p').forEach((tag, index) => {
        const divElement = nav.querySelectorAll(
            '.navWrapper>.ulist>ul>li>div.ulist',
        )[index];
        if (typeof divElement !== 'undefined') {
            //Creating arrow icons to be added
            const spanElement = document.createElement('span');
            spanElement.classList.add('iconSpan');
            const imageElement = document.createElement('img');
            imageElement.src = ArrowForward;
            divElement.classList.add('displayNone');

            //Checking if this div contains the active link
            const allLinks = divElement.querySelectorAll('a');
            if (typeof allLinks !== 'undefined') {
                for (let i = 0; i < allLinks.length; i++) {
                    const splitArr = allLinks[i].href.split('=');
                    if (splitArr.length > 1 && splitArr[1] === pageId) {
                        imageElement.src = ArrowDown;
                        divElement.classList.remove('displayNone');
                        break;
                    }
                }
            }

            //Adding arrow icon to the p tags
            spanElement.appendChild(imageElement);
            tag.appendChild(spanElement);
        }
    });
    return nav.innerHTML;
};

export const collapseAndExpandLeftNav = (setLeftNavOpen: Function) => {
    setTimeout(() => {
        document
            .querySelectorAll('.navWrapper>.ulist>ul>li>p')
            .forEach((tag, index) => {
                const divElement = document.querySelectorAll(
                    '.navWrapper>.ulist>ul>li>div.ulist',
                )[index];

                //Adding click listener to the headings
                tag.addEventListener('click', () => {
                    divElement.classList.toggle('displayNone');
                    const img = divElement.parentElement.children[0].children[0]
                        .children[0] as HTMLImageElement;
                    img.src = divElement.classList.contains('displayNone')
                        ? ArrowForward
                        : ArrowDown;
                });

                //Adding click listener to close left nav when in mobile resolution
                document
                    .querySelectorAll(
                        '.navWrapper>.ulist>ul>li>div.ulist>ul>li p>a',
                    )
                    .forEach((link) => {
                        link.addEventListener('click', () => {
                            setLeftNavOpen(false);
                        });
                    });
            });
    }, 100);
};
