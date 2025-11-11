const ctxEnergia = document.getElementById('graficoEnergia').getContext('2d');

new Chart(ctxEnergia, {
    type: 'bar',
    data: {
        labels: ['2024'],
        datasets: [{
            label: 'Participação de fontes renováveis na matriz elétrica (%)',
            data: [88.2],
            backgroundColor: ['#27AE60'],
            borderColor: ['#1F8A44'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Renovabilidade da Matriz Elétrica - 2024 (88,2%) — Fonte: EPE (BEN 2025)',
                color: '#2C3E50',
                font: {size: 13, weight: '600'}
            },
            legend: {display: false}
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {callback: value => value + '%'}  
            }
        }
    }
});

const ctxResiduos = document.getElementById('graficoResiduos').getContext('2d');

const residuosData = [46.0, 16.5, 10.4, 2.2, 2.4, 22.5];

new Chart(ctxResiduos, {
    type: 'bar',
    data: {
        labels: ['Orgânico', 'Plástico', 'Papel/Papelão', 'Vidro', 'Metais', 'Outros'],
        datasets: [{
            label: 'Composição (%)',
            data: residuosData,
            backgroundColor: ['#27AE60', '#2E86DE', '#A3E635', '#52BE80', '#5DADE2', '#D5DBDB'],
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Composição dos Resíduos Sólidos Urbanos (Panorama ABRELPE — ano-base 2022/2023)',
                color: '#2C3E50',
                font: {size: 13, weight: '600'}
            },
            legend: {display: false}
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {callback: value => value + '%'},
                grid: {color: '#2C3E50' }
            }
        }
    }
});

const ctxColeta = document.getElementById('graficoColeta').getContext('2d');

new Chart(ctxColeta, {
    type: 'doughnut',
    data: {
        labels: ['Com coleta seletiva (60,5%)', 'Sem coleta seletiva (39,5%)'],
        datasets: [{
            data: [60.5, 39.5],
            backgroundColor: ['#27AE60', '#E0E0E0'],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Municípios com Coleta Seletiva (dados MUNIC 2023 - 60,5%) — Fonte: IBGE',
                color: '#2C3E50',
                font: {size: 13, weight: '600'},
            },
            legend: {
                position: 'bottom',
                labels: {color: '#2C3E50'}
            }
        }, 
    }
});