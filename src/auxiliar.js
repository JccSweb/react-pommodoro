const criarHistorico = (historico, setHistorico) => {
    let hoje = new Date();
    let dia = hoje.getUTCDate();
    let mes = hoje.getMonth();
    let ano = hoje.getFullYear();
    let last = historico[historico.length - 1];
    let lastindex = historico.length - 1;

    if (!historico.length) {
        setHistorico([{
            dia,
            mes,
            ano,
            total: 1
        }]);
    } else if (last.dia !== dia || last.mes !== mes || last.ano !== ano) {
        setHistorico((previous) => [...previous, {
            dia,
            mes,
            ano,
            total: 1
        }]);
    } else {
        setHistorico((previous) =>
            previous.map((element, index) =>
                index === lastindex ? {
                    ...element,
                    total: element.total + 1
                } :
                element
            )
        );
    }
};

export default criarHistorico