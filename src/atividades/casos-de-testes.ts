
type CasoDeTeste = {
  id: number;
  titulo: string;
  descricao: string;
  automatizado: boolean;
};


function criarCasoDeTeste(
  id: number,
  titulo: string,
  descricao: string,
  automatizado: boolean = false
): CasoDeTeste {
  return {
    id,
    titulo,
    descricao,
    automatizado,
  };
}

function descrever(casoDeTeste: CasoDeTeste): string {
  return `Id: ${casoDeTeste.id} - Título: ${casoDeTeste.titulo} - Descrição: ${casoDeTeste.descricao} - Automatizado: ${casoDeTeste.automatizado}`;
}


function marcarAutomatizado(casoDeTeste: CasoDeTeste): CasoDeTeste {
  return {
    ...casoDeTeste,
    automatizado: true,
  };
}

const primeiroCasoDeTeste = criarCasoDeTeste(
  "1",
  "Login com credenciais válidas",
  "Validar acesso ao sistema ao inserir e-mail e senha válidos"
);

console.log(descrever(primeiroCasoDeTeste));

const casoDeTesteAtualizado = marcarAutomatizado(primeiroCasoDeTeste);


console.log(descrever(casoDeTesteAtualizado));

