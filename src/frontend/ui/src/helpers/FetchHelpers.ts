const fetcher = async <T>(url: string, options: RequestInit = {}): Promise<T | { error: string | Error }> => {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(options.headers || {}),
    };

    const response: Response = await fetch(url, options);

    if (response.ok) {
        return response.json();
    }

    let error: Error | string;

    try {
        error = await response.clone().json();
    } catch (e) {
        error = await response.text();
    }

    return { error };
};

const normaliseUrl = function (url: string): string {
    let protocolSplit = url.split('//');
    let normalisedUrl = '';
    if (
        protocolSplit[0] &&
        (protocolSplit[0] === 'http:' ||
            protocolSplit[0] === 'https:' ||
            protocolSplit[0] === 'ws:' ||
            protocolSplit[0] === 'wss:')
    ) {
        normalisedUrl = `${protocolSplit[0]}//`;
        protocolSplit.splice(0, 1);
    }

    let query = '';
    let querySplit = protocolSplit.join('//').split('?');
    if (querySplit.length > 1) {
        query = `?${querySplit.slice(1, querySplit.length).join('?')}`;
    }
    const pathSplit = querySplit[0].split('/');

    for (let n = 0; n < pathSplit.length; n++) {
        if (pathSplit[n]) {
            normalisedUrl += `${pathSplit[n]}/`;
        }
    }

    normalisedUrl = normalisedUrl.substring(0, normalisedUrl.length - 1);
    return normalisedUrl + query;
};

type BasicTypes = string | number | boolean;

type AcceptedQueryTypes = {
    [key: string]: BasicTypes | Array<BasicTypes>;
};

const generateQueryString = function (query: AcceptedQueryTypes): string {
    const params = new URLSearchParams();
    Object.keys(query).forEach((key) => {
        let value = query[key];
        if (value !== undefined) {
            if (Array.isArray(value)) {
                value.forEach((currentValue) => {
                    params.append(key, currentValue.toString());
                });
            } else {
                params.set(key, query[key].toString());
            }
        }
    });
    return `?${params.toString()}`;
};

export { fetcher, normaliseUrl, generateQueryString };
