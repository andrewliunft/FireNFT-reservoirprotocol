import axios from 'axios';

export const EMAIL_SUB_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_EMAIL_CHAT_BOT;
export const EMAIL_SUB_CHAT_ID = process.env.REACT_APP_TELEGRAM_EMAIL_CHAT_ID;

export const DEPLOYMENT_ALERT_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_DEPLOYMENT_BOT;
export const DEPLOYMENT_ALERT_CHAT_ID = process.env.REACT_APP_TELEGRAM_DEPLOYMENT_CHAT_BOT;

export const USD_TO_KRW = process.env.REACT_APP_USD_TO_KRW;

export const formatNumber = (num) => {
    if (Math.abs(num) > 999 && Math.abs(num) < 1000000) {
        return Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k'
    } else if (Math.abs(num) > 999999) {
        return Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1)) + 'm'
    }

    return (Math.sign(num) * Math.abs(num)).toFixed(1)
}

export const formatNumberKorean = (num) => {
    if (Math.abs(num) > 9999 && Math.abs(num) < 100000000) {
        return Math.sign(num) * ((Math.abs(num) / 10000).toFixed(1)) + '만'
    } else if (Math.abs(num) > 99999999) {
        return Math.sign(num) * ((Math.abs(num) / 100000000).toFixed(1)) + '억'
    } else {
        return (Math.round(Math.sign(num) * Math.abs(num) / 100)) * 100
    }
}

export const addZero = (num) => num < 10 ? '0' + num : num;

export const truncateMiddle = (str, start, end) => {
    return str.slice(0, start) + '...' + str.slice(str.length - end);
}

export const preventDefault = () => {
    document.querySelectorAll('a[href="#"]').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    document.querySelectorAll('form').forEach((el) => {
        if (el.getAttribute('action') === '#' || el.getAttribute('action') === null) {
            el.addEventListener('submit', (e) => {
                e.preventDefault();
            });
        }
    });
};

export const sendMessageToTelegram = async (message, botToken, chatId) => {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const body = JSON.stringify({
        chat_id: chatId,
        text: message,
    });

    await axios.post("https://87nbon6c51.execute-api.ap-northeast-2.amazonaws.com/staging", { // proxy
        url: url,
        headers: {},
        body: body,
    }).then((res) => {
        return res
    }).catch((err) => { console.log('err:', err) });
}; 