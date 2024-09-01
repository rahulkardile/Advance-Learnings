import React, { useMemo, useState } from 'react'

const Contact = () => {

    const [count, setCount] = useState<number>(0);
    const [item, setItem] = useState<number>(12);

    const multiCount = useMemo(() => {
        console.log('multicount log!');
        return count * 33;
    }, [count])

    return (
        <div>
            <h3>Contact</h3>
            <p>Learning useMemo</p>


            <br />
            <h2>Count is {count}</h2>
            <h2>item is {item}</h2>
            <h2>multiCount is {multiCount}</h2>

            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item + 10)}>Update Item</button>

        </div>
    )
}

export default Contact