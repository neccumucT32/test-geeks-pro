const PokemonCards = ({ pokemonInfo }) => {
  const { name, sprites } = pokemonInfo;
  const imageUrl = sprites.front_default;
  return (
    <div
      style={{
        width: "450px",
        height: "300px",
        border: "1px solid grey",
        borderRadius: "10px",
        fontSize: "15px",
        background: "cadetblue",
        boxShadow: "12px 10px 10px 10px rgba(0,0,0,0.1)",
        marginTop: "10px",
      }}
    >
      <h2>{name}</h2>
      {imageUrl && (
        <img src={imageUrl} alt={name} style={{ height: "150px" }}></img>
      )}
    </div>
  );
};

export default PokemonCards;
