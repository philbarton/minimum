import { useState } from 'preact/hooks';

export default function RandomNumber() {
    const [number, setNumber] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchNumber = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/random');
            const data = await res.json();
            setNumber(data.number);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 border rounded shadow">
            <p>Random Number: {number !== null ? number : 'Click to fetch'}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
                onClick={fetchNumber}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Fetch Random Number'}
            </button>
        </div>
    );
}