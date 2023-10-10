document.addEventListener('DOMContentLoaded', () => {
    // Favicon
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = 'https://abs.twimg.com/favicons/twitter.2.ico';
    }

    // Title
    new MutationObserver(() => {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            if (titleElement.textContent == 'X') titleElement.textContent = 'Twitter';
            else titleElement.textContent = titleElement.textContent.replace(' / X', ' / Twitter');
        }
    }).observe(document.head, {
        childList: true
    });

    // Logo
    waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div:nth-child(1) > div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg').then((logo) => {
        if (!logo) return;
        logo.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
    });

    // Splash Logo
    waitForSelector('#placeholder > svg').then((splash) => {
        if (!splash) return;
        const classes = splash.getAttribute('class');
        splash.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1p0dtai r-vlxjld r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
        splash.setAttribute('class', classes);
    });

    // Verified Tab
    waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(8) > div > div.css-1dbjc4n > svg').then((logo) => {
        if (!logo) return;
        logo.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
    });

    // Button Texts
    new MutationObserver(() => {
        const tweetButton = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-kemksi.r-184en5c > div > div.css-1dbjc4n.r-kemksi.r-1h8ys4a > div:nth-child(1) > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-1h8ys4a.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div.css-1dbjc4n.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div:nth-child(2) > div > div > span > span');
        if (tweetButton && tweetButton.textContent != 'Tweet') {
            tweetButton.innerHTML = 'Tweet';
        }

        const tweetSidebarButton = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-1r5su4o.r-e7q0ms > a > div > span > div > div > span > span')
        if (tweetSidebarButton && tweetSidebarButton.textContent != 'Tweet') {
            tweetSidebarButton.innerHTML = 'Tweet';
        }

        const retweetButton = document.querySelector('div.css-1dbjc4n.r-16y2uox.r-1wbh5a2 > div > span');
        if (retweetButton && retweetButton.textContent == 'Repost') {
            retweetButton.innerHTML = 'Retweet';
        }

        const notificationsTab = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-1jgb5lz.r-1ye8kvj.r-13qz1uu');
        if (notificationsTab) {
            const articles = notificationsTab.querySelectorAll('article');
            if (articles && articles.length > 0) {
                for (const article of articles) {
                    const text = article.querySelector('div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci > div.css-901oao.r-1nao33i.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-1udh08x.r-qvutc0 > span > span');
                    if (text && (text.textContent.includes(' post') || text.textContent.includes('repost'))) {
                        text.innerHTML = text.innerHTML.replace(' post', ' tweet').replace('repost', 'retweet');
                    }
                }
            }
        }
    }).observe(document.body, {
        childList: true,
        subtree: true
    });
});

function waitForSelector(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    });
}