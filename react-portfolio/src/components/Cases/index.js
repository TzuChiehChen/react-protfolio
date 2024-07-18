import React from 'react';
import styled from 'styled-components';
import './index.scss'; // Ensure this is the correct path

const casesArray = [
    {
        title: 'Learnovation Academy',
        description: 'Description for case study 1.',
    },
    {
        title: 'Case Study 2',
        description: 'Description for case study 2.',
    },
    {
        title: 'Case Study 3',
        description: 'Description for case study 3.',
    },
];

const CasesContainer = styled.div`
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CaseItem = styled.div`
    margin-bottom: 20px;
    width: 80%;
    max-width: 600px;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 1.5rem;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #666;
    }
`;

const Cases = () => {
    return (
        <CasesContainer>
            {casesArray.map((caseItem, index) => (
                <CaseItem key={index}>
                    <h3>{caseItem.title}</h3>
                    <p>{caseItem.description}</p>
                </CaseItem>
            ))}
        </CasesContainer>
    );
};

export default Cases;
