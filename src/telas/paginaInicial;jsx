import { useState } from 'react';
import MusicalCard from '../components/MusicalCard';
import { musicais, getGeneros, getCidades, getIdiomas } from '../data/musicaisData';

export default function HomeScreen({ onSelectMusical }) {
  const [busca, setBusca] = useState('');
  const [generoSelecionado, setGeneroSelecionado] = useState('Todos');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('Todas');
  const [idiomaSelecionado, setIdiomaSelecionado] = useState('Todos');
  const [modalVisivel, setModalVisivel] = useState(false);

  const generos = getGeneros();
  const cidades = getCidades();
  const idiomas = getIdiomas();

  const musicaisFiltrados = musicais.filter(musical => {
    const matchBusca = musical.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                       musical.genero.toLowerCase().includes(busca.toLowerCase()) ||
                       musical.cidade.toLowerCase().includes(busca.toLowerCase());
    
    const matchGenero = generoSelecionado === 'Todos' || musical.genero === generoSelecionado;
    const matchCidade = cidadeSelecionada === 'Todas' || musical.cidade === cidadeSelecionada;
    const matchIdioma = idiomaSelecionado === 'Todos' || musical.idioma === idiomaSelecionado;
    
    return matchBusca && matchGenero && matchCidade && matchIdioma;
  });

  const limparFiltros = () => {
    setGeneroSelecionado('Todos');
    setCidadeSelecionada('Todas');
    setIdiomaSelecionado('Todos');
    setModalVisivel(false);
  };

  const filtrosAtivos = [generoSelecionado, cidadeSelecionada, idiomaSelecionado]
    .filter(f => f !== 'Todos' && f !== 'Todas').length;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.titulo}>Clap!</h1>
        <p style={styles.subtitulo}>Onde a mágica dos musicais nunca vai de cortina.</p>
      </div>

      <div style={styles.buscaFiltroContainer}>
        <input
          type="text"
          style={styles.inputBusca}
          placeholder="🔍 Pesquisar musicais..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        
        <button 
          style={styles.filtroButton}
          onClick={() => setModalVisivel(true)}
        >
          🎭 {filtrosAtivos > 0 ? `(${filtrosAtivos})` : ''}
        </button>
      </div>

      {filtrosAtivos > 0 && (
        <div style={styles.filtrosAtivosContainer}>
          {generoSelecionado !== 'Todos' && (
            <div style={styles.chipFiltro}>
              <span style={styles.chipTexto}>{generoSelecionado}</span>
              <button 
                style={styles.chipRemover}
                onClick={() => setGeneroSelecionado('Todos')}
              >
                ✕
              </button>
            </div>
          )}
          {cidadeSelecionada !== 'Todas' && (
            <div style={styles.chipFiltro}>
              <span style={styles.chipTexto}>{cidadeSelecionada}</span>
              <button 
                style={styles.chipRemover}
                onClick={() => setCidadeSelecionada('Todas')}
              >
                ✕
              </button>
            </div>
          )}
          {idiomaSelecionado !== 'Todos' && (
            <div style={styles.chipFiltro}>
              <span style={styles.chipTexto}>{idiomaSelecionado}</span>
              <button 
                style={styles.chipRemover}
                onClick={() => setIdiomaSelecionado('Todos')}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}

      <div style={styles.scrollView}>
        <p style={styles.resultadosTexto}>
          {musicaisFiltrados.length} {musicaisFiltrados.length === 1 ? 'musical encontrado' : 'musicais encontrados'}
        </p>

        {musicaisFiltrados.length > 0 ? (
          musicaisFiltrados.map((musical) => (
            <MusicalCard
              key={musical.id}
              musical={musical}
              onPress={() => onSelectMusical(musical)}
            />
          ))
        ) : (
          <div style={styles.vazioContainer}>
            <p style={styles.vazioTexto}>Nenhum musical encontrado 🎭</p>
            <p style={styles.vazioSubtexto}>Tente ajustar os filtros</p>
          </div>
        )}
      </div>

      {/* Modal de Filtros */}
      {modalVisivel && (
        <div style={styles.modalOverlay} onClick={() => setModalVisivel(false)}>
          <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitulo}>Filtros</h2>
              <button 
                style={styles.modalFechar}
                onClick={() => setModalVisivel(false)}
              >
                ✕
              </button>
            </div>

            <div style={styles.modalContent}>
              {/* Filtro de Gênero */}
              <h3 style={styles.filtroTitulo}>Gênero</h3>
              <div style={styles.opcoesFiltro}>
                {generos.map((genero) => (
                  <button
                    key={genero}
                    style={{
                      ...styles.opcaoButton,
                      ...(generoSelecionado === genero && styles.opcaoButtonAtivo)
                    }}
                    onClick={() => setGeneroSelecionado(genero)}
                  >
                    {genero}
                  </button>
                ))}
              </div>

              {/* Filtro de Cidade */}
              <h3 style={styles.filtroTitulo}>Cidade</h3>
              <div style={styles.opcoesFiltro}>
                {cidades.map((cidade) => (
                  <button
                    key={cidade}
                    style={{
                      ...styles.opcaoButton,
                      ...(cidadeSelecionada === cidade && styles.opcaoButtonAtivo)
                    }}
                    onClick={() => setCidadeSelecionada(cidade)}
                  >
                    {cidade}
                  </button>
                ))}
              </div>

              {/* Filtro de Idioma */}
              <h3 style={styles.filtroTitulo}>Idioma</h3>
              <div style={styles.opcoesFiltro}>
                {idiomas.map((idioma) => (
                  <button
                    key={idioma}
                    style={{
                      ...styles.opcaoButton,
                      ...(idiomaSelecionado === idioma && styles.opcaoButtonAtivo)
                    }}
                    onClick={() => setIdiomaSelecionado(idioma)}
                  >
                    {idioma}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.modalFooter}>
              <button style={styles.limparButton} onClick={limparFiltros}>
                Limpar Filtros
              </button>
              <button 
                style={styles.aplicarButton} 
                onClick={() => setModalVisivel(false)}
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFF5F7',
    paddingBottom: 40,
  },
  header: {
    textAlign: 'center',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 'clamp(36px, 8vw, 48px)',
    fontWeight: 'bold',
    color: '#8B2635',
    fontStyle: 'italic',
    margin: 0,
  },
  subtitulo: {
    fontSize: 'clamp(11px, 2.5vw, 12px)',
    color: '#333',
    marginTop: 5,
  },
  buscaFiltroContainer: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
    gap: 10,
    maxWidth: 800,
    margin: '0 auto 15px',
  },
  inputBusca: {
    flex: 1,
    backgroundColor: '#F0E5E8',
    borderRadius: 25,
    padding: '12px 20px',
    fontSize: 14,
    color: '#333',
    border: 'none',
    outline: 'none',
  },
  filtroButton: {
    backgroundColor: '#8B2635',
    width: 50,
    height: 50,
    minWidth: 50,
    borderRadius: 25,
    border: 'none',
    fontSize: 20,
    cursor: 'pointer',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtrosAtivosContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    maxWidth: 800,
    margin: '0 auto 10px',
  },
  chipFiltro: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#8B2635',
    padding: '6px 15px',
    borderRadius: 20,
  },
  chipTexto: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
  chipRemover: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 800,
    margin: '0 auto',
  },
  resultadosTexto: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    paddingLeft: 5,
  },
  vazioContainer: {
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 60,
  },
  vazioTexto: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
  },
  vazioSubtexto: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 10,
  },
  modalContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    maxHeight: '80vh',
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottom: '1px solid #F0E5E8',
  },
  modalTitulo: {
    fontSize: 'clamp(20px, 5vw, 24px)',
    fontWeight: 'bold',
    color: '#8B2635',
    margin: 0,
  },
  modalFechar: {
    fontSize: 28,
    color: '#666',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    width: 30,
    height: 30,
  },
  modalContent: {
    padding: 20,
    overflowY: 'auto',
    flex: 1,
  },
  filtroTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  opcoesFiltro: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  opcaoButton: {
    backgroundColor: '#F0E5E8',
    padding: '8px 16px',
    borderRadius: 20,
    border: 'none',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  opcaoButtonAtivo: {
    backgroundColor: '#8B2635',
    color: '#FFF',
  },
  modalFooter: {
    display: 'flex',
    padding: 20,
    gap: 10,
    borderTop: '1px solid #F0E5E8',
  },
  limparButton: {
    flex: 1,
    backgroundColor: '#F0E5E8',
    padding: 15,
    borderRadius: 25,
    border: 'none',
    cursor: 'pointer',
    color: '#8B2635',
    fontSize: 15,
    fontWeight: 'bold',
  },
  aplicarButton: {
    flex: 1,
    backgroundColor: '#8B2635',
    padding: 15,
    borderRadius: 25,
    border: 'none',
    cursor: 'pointer',
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
};
