import React, {useEffect, useState} from "react";



const Faq6=()=>{
    useEffect(() => {
        document.title = "FAQ";
    }, []);



    const questions = [
        "Чем занимается наша сеть?",
        "Чем занимается наша сеть?",
        "Чем занимается наша сеть?",
        "Чем занимается наша сеть?",
        "Чем занимается наша сеть?",
      ];
      const answers = [
        "Наша сеть предоставляет качественные услуги",
        "Наша сеть предоставляет качественные услуги",
        "Наша сеть предоставляет качественные услуги",
        "Наша сеть предоставляет качественные услуги",

      ];
    
    //   const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    //   const handleInputChange = (index, event) => {
    //     const newAnswers = [...answers];
    //     newAnswers[index] = event.target.value;
    //     setAnswers(newAnswers);
    //   }

      const [openIndexes, setOpenIndexes] = useState(Array(questions.length).fill(false));
    
      const handleToggle = (index) => {
        const newOpenIndexes = [...openIndexes];
        newOpenIndexes[index] = !newOpenIndexes[index];
        setOpenIndexes(newOpenIndexes);
      };
    

    return(
        <>
            <div className="container">
                <div className="faq">
                    <h3>FAQ</h3>
                    <p>В этом разделе находятся основные вопросы и ответы, связанные с работой в MagnetAgency</p>
                    <div className="faqqustions">
                    {questions.map((question, index) => (
                        <div key={index} style={{ marginBottom: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.418)', paddingTop: '1rem' }}>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span className="questionans" style={{ fontWeight: '500' }}>{question}</span>
                            <span onClick={() => handleToggle(index)} className="plusquest" style={{ fontSize: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.418)', paddingTop: '7px', width: '3rem', height: '3rem', textAlign: 'center', borderRadius: '50%' }}>{openIndexes[index] ? '-' : '+'}</span>
                        </div>
                        {openIndexes[index] && (
                            <div>
                                <div style={{ width: '100%', border: 'none', fontSize: '0.8rem', color: 'white', outline: 'none' }}>
                                    {answers[index]}
                                
                                </div>
                            </div>
                        )}
                        
                        </div>
                    ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Faq6;
