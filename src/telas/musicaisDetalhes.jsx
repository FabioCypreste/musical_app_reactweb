export default function DetailScreen({ musical, onBack }) {
  const abrirVideo = () => {
    const url = `https://www.youtube.com/watch?v=${musical.videoId}`;
    window.open(url, '_blank');
  };

  return (
    <div style={styles.container}>
      <button style={styles.voltarButton} onClick={onBack}>
        <span style={styles.voltarTexto}>← Voltar</span>
      </button>

      <div style={styles.scrollView}>
        <div style={styles.content}>
          <img src={musical.imagem} alt={musical.titulo} style={styles.imagemGrande} />
          
          {musical.subtitulo && (
            <p style={styles.subtitulo}>{musical.subtitulo}</p>
          )}
          
          <h1 style={styles.titulo}>{musical.titulo}</h1>

          {/* Info Cards */}
          <div style={styles.infoCardsContainer}>
            <div style={styles.infoCard}>
              <p style={styles.infoLabel}>🎭 Gênero</p>
              <p style={styles.infoValor}>{musical.genero}</p>
            </div>
            <div style={styles.infoCard}>
              <p style={styles.infoLabel}>📍 Cidade</p>
              <p style={styles.infoValor}>{musical.cidade}</p>
            </div>
            <div style={styles.infoCard}>
              <p style={styles.infoLabel}>🗣️ Idioma</p>
              <p style={styles.infoValor}>{musical.idioma}</p>
            </div>
          </div>

          <div style={styles.tagsContainer}>
            {musical.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  ...styles.tag,
                  ...(tag === 'teatro' && styles.tagTeatro),
                  ...(tag === 'filmes' && styles.tagFilmes),
                  ...(tag === 'português' && styles.tagPortugues),
                  ...(tag === 'inglês' && styles.tagIngles),
                  ...(tag === 'brasileiro' && styles.tagBrasileiro),
                  ...(tag === 'internacional' && styles.tagInternacional)
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={styles.descricaoContainer}>
            <h2 style={styles.descricaoTitulo}>Sobre o Musical</h2>
            <p style={styles.descricao}>{musical.descricao}</p>
          </div>

          <button style={styles.videoButton} onClick={abrirVideo}>
            <span style={styles.videoButtonTexto}>▶️ Assistir Apresentação ao Vivo</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFF5F7',
  },
  voltarButton: {
    padding: 20,
    paddingTop: 40,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  voltarTexto: {
    fontSize: 16,
    color: '#8B2635',
    fontWeight: '600',
  },
  scrollView: {
    overflowY: 'auto',
  },
  content: {
    padding: '0 20px 40px',
    maxWidth: 800,
    margin: '0 auto',
  },
  imagemGrande: {
    width: '100%',
    height: 'auto',
    maxHeight: 400,
    minHeight: 250,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: '#E0E0E0',
    objectFit: 'cover',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  titulo: {
    fontSize: 'clamp(24px, 6vw, 32px)',
    fontWeight: 'bold',
    color: '#8B2635',
    marginBottom: 20,
    marginTop: 0,
    lineHeight: 1.2,
  },
  infoCardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: 10,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#F5F0F2',
    padding: 12,
    borderRadius: 15,
    textAlign: 'center',
  },
  infoLabel: {
    fontSize: 11,
    color: '#666',
    marginBottom: 4,
    margin: 0,
  },
  infoValor: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
    margin: 0,
    marginTop: 4,
    wordBreak: 'break-word',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 25,
    gap: 8,
  },
  tag: {
    padding: '6px 15px',
    borderRadius: 15,
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  tagPortugues: {
    backgroundColor: '#E8F5E9',
  },
  tagIngles: {
    backgroundColor: '#E3F2FD',
  },
  tagTeatro: {
    backgroundColor: '#F3E5F5',
  },
  tagFilmes: {
    backgroundColor: '#BBDEFB',
  },
  tagBrasileiro: {
    backgroundColor: '#FFF9C4',
  },
  tagInternacional: {
    backgroundColor: '#FFE0B2',
  },
  descricaoContainer: {
    marginBottom: 25,
  },
  descricaoTitulo: {
    fontSize: 'clamp(18px, 4vw, 20px)',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 15,
    color: '#555',
    lineHeight: '24px',
    textAlign: 'justify',
  },
  videoButton: {
    backgroundColor: '#8B2635',
    padding: 18,
    borderRadius: 25,
    border: 'none',
    width: '100%',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
  videoButtonTexto: {
    color: '#FFF',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: 'bold',
  },
};
