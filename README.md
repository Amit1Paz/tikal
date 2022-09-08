# Tikal Code Challenge
Rick and Morty's assignment

![Rick and Morty- Video](https://media.giphy.com/media/Mp4ccPmBke98HARlmO/giphy.gif)


## Technologies
- **Front**: [React](https://reactjs.org/)
- **Fetch data**: [Axios](https://axios-http.com/)
- **UI**: [MUI](https://mui.com/)

## Part one
### Fetch the data
I had to find Rick and Morty's most unpopular character using an [API]().

After examining the documentation, I realized that the API returns the data in groups of 20 characters. Thus, finding all the characters will make me call the API over 40 times.
I then considered fetching the data using the location schema since there are fewer locations, which means fewer API calls. However, I noticed a difference between the residents' array in the location schema and the origin in the character schema.

#### Solution: 
Because I had to solve the task with as few API calls as possible, I found a way to fetch all the data using two calls.
In the first API call, I checked for the number of characters. Then, I created an array that contains numbers from 1 to the number of characters that simulate the ID of the characters. Finally, I made a second API call using the characters' schema by their IDs. The API allows fetching multiple characters using their IDs, so I inserted the array of IDs I created into the URL.

For the solution to be scalable, if there was a significantly large amount of characters, the array I created could be divided into several API calls.


## Part two
I had to create a bar chart showing five characters according to the number of episodes in which they appeared.

#### Solution: 
My task was to create the chart without using any chart libraries, so I used divs for the bars. To display the right height, I calculated the percentage of each character's episodes number based on the one with the most episodes.
I used the data I already had without making new API calls.
