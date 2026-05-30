import React,{useEffect,useState} from 'react';

function Count(){
    const [count, setCount] = useState(0,1);

    useEffect(() => {
        const countTimer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearInterval(countTimer);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );


}export default Count;