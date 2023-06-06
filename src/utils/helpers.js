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