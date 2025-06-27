import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Style/Info.css'
const NodeInfo = () => {
    const { id } = useParams();
    const [lastLog, setLastLog] = useState([]);
    const action = 'fetch_last_log';
    const dummy = 'insert';
    async function fetchData() {
        try {
            const responseLog = await fetch('http://13.60.106.234:3001/mid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, id }),
            });

            const dataLog = await responseLog.json();
            if (JSON.stringify(lastLog) !== JSON.stringify(dataLog || [])) {
                setLastLog(dataLog || []);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    async function postData() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        var now = date + ' '+ time;
        var data = "(null, '#0006', '" + now + "', 'E0001'," + Math.floor(Math.random() * 100)+", "+Math.floor(Math.random() * 100)+", "+Math.floor(Math.random() * 100)+", "+Math.floor(Math.random() * 50)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", "+Math.floor(Math.random() * 10)+", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)";
        console.log(data)
        try {
            const responseNodes = await fetch('http://13.60.106.234:3001/mid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({dummy, data}),
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
        postData();
        const intervalId = setInterval(fetchData, 6000);
        const interval = setInterval(postData, 6000);
        return () => clearInterval(intervalId, interval);
    });

    function onoff(value) {
        if (value === 1)
            return 'ON'
        else
            return 'OFF'
    }

    return (
        <div className="table-container">
            <h3 style={{ margin: '1rem' }}>{id}</h3>
            <div className="node">
                <div className="state">
                    <p>Системийн төлөв : </p>
                    {lastLog.length > 0 &&
                        <p>{onoff(lastLog[0].log_sys_state)}</p>
                    }
                </div>
                <div className="state">
                    <p>Ажиллагааны төлөв : </p>
                    {lastLog.length > 0 &&
                        <p>{lastLog[0].log_state}</p>
                    }
                </div>
                <div className="state">
                    <p>1-р хэлхээ : </p>
                    {lastLog.length > 0 &&
                        <p>{onoff(lastLog[0].log_us_state)}</p>
                    }
                </div>
                <div className="state">
                    <p>2-р хэлхээ : </p>
                    {lastLog.length > 0 &&
                        <p>{onoff(lastLog[0].log_hs_state)}</p>
                    }
                </div>
                <div className="state">
                    <p>Гадаад Температур : </p>
                    {lastLog.length > 0 &&
                        <p>{lastLog[0].log_t31}°C</p>
                    }
                </div>
            </div>
            {lastLog.length > 0 &&
                <div className={lastLog[0].log_hs_state === 1 ? "tcv2 on" : "tcv2"}>
                    {lastLog[0].log_hs_state === 1 &&
                        <div style={{ display: 'flex' }}>
                            <div className="t11">
                                <abbr title="T11 - Ирэх температур"><p>{lastLog[0].log_t11}°C </p></abbr>
                                <abbr title="P11 - Ирэх даралт"><p>{lastLog[0].log_p11}bar </p></abbr><br></br>
                                <abbr title="T12 - Буцах температур"><p>{lastLog[0].log_t12}°C </p></abbr>
                                <abbr title="P12 - Буцах даралт"><p>{lastLog[0].log_p12}bar </p></abbr>
                            </div>
                            <abbr title="P32 - Насосны даралт"><p style={{ padding: '16rem 0 0 30rem' }}>{lastLog[0].log_p32}bar</p></abbr>
                            <h4 style={{ margin: '0' }}>ХАЛААЛТ</h4>
                            <div className="t21">
                                <div style={{ display: 'flex' }}>
                                    <abbr title="T21 - Ирэх температур"><p style={{ paddingRight: '1rem' }}>{lastLog[0].log_t21}°C</p></abbr>
                                    <abbr title="P21 - Ирэх даралт"><p>{lastLog[0].log_p21}bar</p></abbr>
                                </div>
                                <div style={{ display: 'flex', paddingTop: '9.5rem' }}>
                                    <abbr title="T22 - Буцах температур"><p style={{ paddingRight: '1rem' }}>{lastLog[0].log_t22}°C</p></abbr>
                                    <abbr title="P22 - Буцах даралт"><p>{lastLog[0].log_p22}bar</p></abbr>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
            {lastLog.length > 0 &&
                <div className={lastLog[0].log_us_state === 1 ? "tcv1 on" : "tcv1"}>
                    {lastLog[0].log_us_state === 1 &&
                        <div style={{ display: 'flex' }}>
                            <abbr title="P52 - Насосны даралт"><p style={{ padding: '15rem 0 0 35rem' }}>{lastLog[0].log_p52}bar</p></abbr>
                            <h4 style={{ margin: '1rem' }}>ХЭРЭГЛЭЭНИЙ ХАЛУУН УС</h4>
                            <div style={{ padding: '5rem 0 0 4.5rem' }}>
                                <div style={{ display: 'flex' }}>
                                    <abbr title="T41 - Ирэх температур"><p style={{ paddingRight: '1rem' }}>{lastLog[0].log_t41}°C</p></abbr>
                                    <abbr title="P41 - Ирэх даралт"><p>{lastLog[0].log_p41}bar</p></abbr>
                                </div>
                                <div style={{ display: 'flex', paddingTop: '8.5rem' }}>
                                    <abbr title="T42 - Буцах температур"><p style={{ paddingRight: '1rem' }}>{lastLog[0].log_t42}°C</p></abbr>
                                    <abbr title="P42 - Буцах даралт"><p>{lastLog[0].log_p42}bar</p></abbr>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default NodeInfo;