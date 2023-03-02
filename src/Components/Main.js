import React, { useState, useEffect } from 'react';

function Main() {
    const [count, setCount] = useState(0);
    const [uuid, setUuid] = useState(0);

    useEffect(() => {
        Twitch.ext.onAuthorized(function (auth) {
            let tuid = auth.userId;

            setUuid(tuid);
        });
    });

    return (
        <div>
            <h1>Twitch onAuthorized called with UID: { uuid } </h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Click me =)
            </button>
        </div>
    );
}

export default Main;
