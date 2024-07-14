import React from "react";
import { Link } from "react-router-dom";
// import rightblue from "../images/rightblue.png";
// import right from "../images/right.png";
// import left from "../images/left.png";
import { ReactComponent as RightIcon } from "../images/right.svg"


const transactions = [
    { date: '07.06.2024', type: 'Вывод средств', status: 'В процессе', amount: '-2000' },
    { date: '07.06.2024', type: 'Поступление', status: '', amount: '+500' },
    { date: '07.05.2024', type: 'Вывод средств', status: 'Отказ', amount: '-2000' },
    { date: '07.05.2024', type: 'Поступление', status: '', amount: '+500' },
    { date: '08.05.2024', type: 'Вывод средств', status: 'Выполнен', amount: '-2000' },
    { date: '08.05.2024', type: 'Поступление', status: '', amount: '+500' },
    { date: '08.04.2024', type: 'Вывод средств', status: 'Выполнен', amount: '-2000' },
    { date: '08.04.2024', type: 'Поступление', status: '', amount: '+500' },
];

// Функция для группировки и сортировки транзакций по дате
const groupAndSortByDate = (transactions) => {
    // Группировка транзакций по дате
    const grouped = transactions.reduce((groups, transaction) => {
        const date = transaction.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
    }, {});

    // Сортировка дат в порядке убывания (новые выше)
    const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b.split('.').reverse().join('-')) - new Date(a.split('.').reverse().join('-')));

    // Формирование результирующего объекта с сортировкой по датам
    const result = {};
    sortedDates.forEach(date => {
        result[date] = grouped[date];
    });

    return result;
};

const groupedTransactions = groupAndSortByDate(transactions);

const Balance7 = () => {
    // const [data] = useState(transactions);

    const getIcon = (type) => {
        if (type === 'Вывод средств') {
            return <RightIcon className="imgtabbal" alt="" />
        }
        if (type === 'Поступление') {
            return <RightIcon className="imgtabbal" alt="" />
        }
        return null;
    }
    // const getIcon = (type) => {
    //     if (type === 'Вывод средств') {
    //         return <img src={right} className="imgtabbal" alt="" />
    //     }
    //     if (type === 'Поступление') {
    //         return <img src={left} className="imgtabbal" alt="" />
    //     }
    //     return null;
    // }


    
    const getStatusStyle = (status) => {
        return status === 'Отказ' ? { color: 'red' } : { color: '#3939ff' };
    }

    return (
        <>
            <div className="container">
                <div className="balance">
                    <h2>Баланс</h2>
                    <div className="balancevidget">
                        <div>
                            <p>Ваш баланс</p>
                            <h4>20,000$</h4>
                        </div>
                        <Link to="/withdrawal_money/" className="p">
                            ВЫВЕСТИ
                        </Link>
                    </div>
                    <div className="history">
                        <div>
                            <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: '500' }}>История</h4>
                            {Object.keys(groupedTransactions).map(date => (
                                <div key={date} className="count" style={{ marginBottom: '2rem' }}>
                                    <h4 className="h4count">{date}</h4>
                                    {groupedTransactions[date].map((transaction, index) => (
                                        <div className="flexbalance">
                                            <div className="leftbal">
                                                <div>{getIcon(transaction.type)}</div>
                                                <div className="textbalance">
                                                    <p style={{ marginBottom: '4px' }}>{transaction.type}</p>
                                                    <p style={getStatusStyle(transaction.status)}>{transaction.status}</p>
                                                </div>
                                            </div>
                                            <div className="rightbal">
                                                {transaction.amount}$
                                            </div>
                                    </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Balance7;