import styled from 'styled-components';

type BotaoProps = {
    principal: boolean;
    fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
    background-color: ${props => (props.principal ? 'green' : 'blue')};
    font-size: ${props => props.fontSize || '16px'};
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
`;

const BotaoPerigo = styled(Botao)`
    background-color: red;
    text-decoration: none;
    span {
        text-decoration: line-through;
    }
`;

function Teste() {
return (
    <>
        <Botao principal>Clique Aqui</Botao>
        <Botao fontSize="14px" principal={false}>
            Cancelar
        </Botao>
        <BotaoPerigo as="a" principal>
            <span>Não clique aqui</span>
        </BotaoPerigo>
    </>
    );
}

export default Teste;
