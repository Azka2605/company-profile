import { useEffect } from 'react';

export default function useMidtrans(snap_token, snap_url, client_key, onSuccess) {
    useEffect(() => {
        if (!snap_url || !snap_token) return;

        const handlePay = () => {
            window.snap.pay(snap_token, {
                onSuccess: onSuccess,
                onPending: onSuccess,
                onError: () => alert('Pembayaran gagal, coba lagi.'),
            });
        };

        const existing = document.querySelector(`script[src="${snap_url}"]`);
        if (existing) {
            handlePay();
            return;
        }

        const script = document.createElement('script');
        script.src = snap_url;
        script.setAttribute('data-client-key', client_key);
        script.async = true;
        script.onload = handlePay;
        document.body.appendChild(script);
    }, [snap_token, snap_url, client_key, onSuccess]);
}
