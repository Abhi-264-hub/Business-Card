export function Getcard({cards}){
  return ( <div> 
        {cards.map(function(card,index){
           return ( <div key={index} style={{
                backgroundColor: 'lightblue',
                borderRadius: '20px', // Adjust this value to change the curvature
                height:'350px',width:'500px',padding:'20px',margin:'20px'
            }}>
              <h1>{card.Name}</h1>
              <p style={{
                fontSize:'20px'
              }}>{card.Aboutme}</p>
              <h2>Interests</h2>
              <p>{card.Interests}</p>
              <a
 href={card.Linkedin.startsWith("http") ? card.Linkedin : `https://${card.Linkedin}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    backgroundColor: '#007bff', // Blue background color
    color: 'white', // White text color
    padding: '10px 20px', // Adds padding inside the button
    border: 'none', // Removes border
    borderRadius: '8px', // Rounds the corners
    cursor: 'pointer',
    fontSize: '16px', // Sets font size
    marginRight: '10px',
    textDecoration: 'none', // Removes underline
    display: 'inline-block', // Makes it behave like a button
  }}
>
  LinkedIn
</a>

<a
  href={card.Twitter}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    backgroundColor: '#007bff', // Blue background color
    color: 'white', // White text color
    padding: '10px 20px', // Adds padding inside the button
    border: 'none', // Removes border
    borderRadius: '8px', // Rounds the corners
    cursor: 'pointer',
    fontSize: '16px', // Sets font size
    marginRight: '10px',
    textDecoration: 'none', // Removes underline
    display: 'inline-block', // Makes it behave like a button
  }}
>
  Twitter
</a>
            </div>

        )})}   
</div>
    )
}