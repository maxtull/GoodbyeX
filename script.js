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
    waitForSelector('#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > header > div > div > div > div:nth-child(1) > div.css-175oi2r.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg').then((logo) => {
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
    waitForSelector('#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > header > div > div > div > div:nth-child(1) > div.css-175oi2r.r-15zivkp.r-1bymd8e.r-13qz1uu.r-1awozwy > nav > a:nth-child(8) > div > div > svg').then((logo) => {
        if (!logo) return;
        logo.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
    });

    // Tweet Texts / Buttons
    new MutationObserver(() => {
        // New Tweet Button
        const tweetButton = document.querySelector('#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1habvwh > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-rsyp9y.r-1pjcn9w.r-1potc6q > div > div > div > div:nth-child(3) > div.css-175oi2r.r-kemksi.r-1h8ys4a.r-1moyyf3.r-1pp923h > div:nth-child(1) > div > div > div > div.css-175oi2r.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div > div > div > span > span');
        if (tweetButton && tweetButton.textContent != 'Tweet') {
            tweetButton.innerHTML = 'Tweet';
        }

        // Tweet Sidebar Button
        const tweetSidebarButton = document.querySelector('#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > header > div > div > div > div.css-175oi2r.r-1habvwh > div.css-175oi2r.r-e7q0ms.r-1r5su4o > a > div > span > div > div > span > span')
        if (tweetSidebarButton && tweetSidebarButton.textContent != 'Tweet') {
            tweetSidebarButton.innerHTML = 'Tweet';
        }

        // Retweet Button
        const retweetButton = document.querySelector('div.css-175oi2r.r-16y2uox.r-1wbh5a2 > div > span');
        if (retweetButton && retweetButton.textContent == 'Repost') {
            retweetButton.innerHTML = 'Retweet';
        }

        // Timeline Retweets
        const retweetedTweets = document.querySelectorAll('div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div > div > div > a > span');
        if (retweetedTweets && retweetedTweets.length > 0) {
            for (const retweetedTweet of retweetedTweets) {
                if (retweetedTweet && retweetedTweet.textContent.includes('reposted')) {
                    retweetedTweet.innerHTML = retweetedTweet.innerHTML.replace('reposted', 'retweeted');
                }
            }
        }

        // Notifications
        const notificationsTab = document.querySelector('#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div.css-175oi2r.r-1jgb5lz.r-13qz1uu.r-1ye8kvj');
        if (notificationsTab) {
            const articles = notificationsTab.querySelectorAll('article');
            if (articles && articles.length > 0) {
                for (const article of articles) {
                    const text = article.querySelector('div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-1udh08x > span > span');
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