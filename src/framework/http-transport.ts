enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

type Options = {
    method: METHOD;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export class HTTPTransport {
   get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        const urlWithQuery = options.data ? this.queryStringify(url, options.data) : url;
        return this.request(urlWithQuery, {...options, method: METHOD.GET});
   };

    post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.POST});
    };

    put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.PUT});
    };

    delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.DELETE});
    };

    request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
        const { method, data, headers = {}, timeout = 5000 } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            if (method !== METHOD.GET && data) {
                Object.keys(headers).forEach((key: string): void => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };

    private queryStringify(url: string, data: Record<string, unknown>): string {
        if (!data || typeof data !== 'object') {
            return url;
        }

        const queryParams = new URLSearchParams();

        Object.keys(data).forEach(key => {
            if (data[key] !== undefined && data[key] !== null) {
                queryParams.append(key, String(data[key]));
            }
        });

        const queryString = queryParams.toString();
        return queryString ? `${url}${url.includes('?') ? '&' : '?'}${queryString}` : url;
    }
}

