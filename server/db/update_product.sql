UPDATE mock_data
   SET  image_url = $2,
        name = $3,
        price = $4

WHERE 
    id = $1