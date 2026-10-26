import { describe, test, expect } from 'vitest';
type TestStatus = 'passed' | 'failed' | 'skipped';

interface TestExecution {
  id: number;
  testName: string;
  status: TestStatus;
  durationMs: number;
}

// 1. Arrays e Objetos tipados
const testExecutions: TestExecution[] = [
  { id: 1, testName: 'Login com credenciais válidas', status: 'passed', durationMs: 450 },
  { id: 2, testName: 'Login com senha incorreta', status: 'passed', durationMs: 320 },
  { id: 3, testName: 'Cadastro de novo usuário', status: 'failed', durationMs: 1200 },
  { id: 4, testName: 'Recuperação de senha por e-mail', status: 'skipped', durationMs: 0 },
  { id: 5, testName: 'Exclusão de conta de usuário', status: 'passed', durationMs: 610 },
  { id: 6, testName: 'Atualização de perfil com avatar', status: 'failed', durationMs: 980 }
];

// 2. Operações sobre arrays: map, filter e reduce
const testSummaries = testExecutions.map((execution) => {
  return `${execution.testName}: ${execution.status.toUpperCase()}`;
});

const failedTests = testExecutions.filter((execution) => {
  return execution.status === 'failed';
});

const totalDurationMs = testExecutions.reduce((accumulator, execution) => {
  return accumulator + execution.durationMs;
}, 0);


/**
 * FLUXO ASSÍNCRONO:
 * 1. 'async' faz a função retornar uma Promise<TestExecution>.
 * 2. 'await' + 'setTimeout' delega a espera de 100ms para o ambiente e libera o Event Loop sem travar a thread.
 * 3. Após 100ms, 'resolve()' é chamado, a Promise é cumprida e a execução é retomada.
 * 4. Se o ID for encontrado, retorna o objeto; se não, lança um erro e rejeita a Promise.
 */
async function getTestExecutionById(id: number): Promise<TestExecution> {
  // Simula latência de rede sem bloquear o Event Loop
  await new Promise((resolve) => setTimeout(resolve, 100));

  const foundExecution = testExecutions.find((execution) => execution.id === id);

  if (!foundExecution) {
    throw new Error(`Execução de teste com ID ${id} não foi encontrada.`);
  }

  return foundExecution;
}

describe('Suíte de Testes - Automação QA', () => {
  describe('Validação das operações de array', () => {
    test('deve ter pelo menos 5 execuções registradas', () => {
      expect(testExecutions.length).toBeGreaterThanOrEqual(5);
    });

    test('deve transformar os dados corretamente com map', () => {
      expect(testSummaries).toContain('Login com credenciais válidas: PASSED');
      expect(testSummaries.length).toBe(testExecutions.length);
    });

    test('deve filtrar apenas os testes que falharam', () => {
      expect(failedTests.every((test) => test.status === 'failed')).toBe(true);
      expect(failedTests.length).toBe(2);
    });

    test('deve calcular o tempo total de duração com reduce', () => {
      expect(totalDurationMs).toBe(3560);
    });
  });

  describe('getTestExecutionById - Caminho de Sucesso', () => {
    test('deve retornar a execução correta quando o id existir', async () => {
      const result = await getTestExecutionById(1);

      expect(result).toEqual({
        id: 1,
        testName: 'Login com credenciais válidas',
        status: 'passed',
        durationMs: 450
      });
    });
  });

  describe('getTestExecutionById - Caminho de Erro', () => {
    test('deve lançar um erro quando o id não for encontrado', async () => {
      const invalidId = 999;
      // O 'expect' espera uma Promise rejeitada devido ao fluxo assíncrono
      await expect(getTestExecutionById(invalidId)).rejects.toThrow(
        `Execução de teste com ID ${invalidId} não foi encontrada.`
      );
    });
  });
});