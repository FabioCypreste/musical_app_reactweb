export default function MusicalCard({ musical, onPress }) {
  return (
    <div onClick={onPress} style={styles.card} onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
    }} onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }}>
      <img src={musical.imagem} alt={musical.titulo} style={styles.imagem} />
      <div style={styles.cardInfo}>
        {musical.subtitulo && (
          <p style={styles.subtituloCard}>{musical.subtitulo}</p>
        )}
        <h3 style={styles.tituloCard}>{musical.titulo}</h3>
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
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#F5F0F2',
    borderRadius: 20,
    marginBottom: 15,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  imagem: {
    width: 80,
    height: 80,
    minWidth: 80,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: '#E0E0E0',
    objectFit: 'cover',
  },
  cardInfo: {
    flex: 1,
    minWidth: 0,
  },
  subtituloCard: {
    fontSize: 11,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 12,
    fontSize: 11,
    color: '#333',
    whiteSpace: 'nowrap',
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
};
