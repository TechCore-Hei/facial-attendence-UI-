import React from 'react';

const Responsibles = () => {
    const Responsible: string[] = ["Enseignant", "Etudiant"]

    return (
        <div>
            <select className="input" name="resp" id="resp">
                {Responsible.map((e,k) => (<option key={k} >{e}</option>))}
            </select>
        </div>
    );
};

export default Responsibles;