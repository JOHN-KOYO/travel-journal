
import EntryInfo from './Entry'
export default function TravelData(){

  return (

<div className="placesVisited">
          <EntryInfo
          img ="https://aglobewelltravelled.com/wp-content/uploads/2025/06/Mt-Fuji-from-Kawaguchiko.jpg"
          locationIcon= "locationIcon.PNG"
          country = "Japan"
          link= {
            <a href="https://www.google.com/maps/search/?api=1&query=Mount+Fuji" target="_blank" rel="noopener noreferrer">
              View on Google Map
            </a>
          }
       
          name= "Mount Fuji"
          date = "12 Jan, 2021 - 24 Jan 2021"
          text = "Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called 'Fuji-san,' it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity."
          />

<EntryInfo
          img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40jDIC9k1RxBJ_upxTBVmgE0WOdU0FHM2t84iXIGn0Q&s=10"
          locationIcon= "locationIcon.PNG"
          country = "India, Nepal, Pakistan, and China"
          link= {
            <a href="https://www.google.com/imgres?q=himalayas&imgurl=https%3A%2F%2Fwww.himalayanwonders.com%2Fsiteblog%2Fwp-content%2Fuploads%2F2016%2F01%2Fsnow-capped-mountains-with-lake-640x427.jpg&imgrefurl=https%3A%2F%2Fwww.himalayanwonders.com%2Fblog%2Fthe-14-most-beautiful-peaks-of-the-himalayas.html&docid=Mfky4gPSJ28mpM&tbnid=lthYHhuZxJ8QwM&vet=12ahUKEwi6h-nbiLWXAxVc2wIHHYMjDgMQnPAOegQIaRAA..i&w=640&h=427&hcb=2&ved=2ahUKEwi6h-nbiLWXAxVc2wIHHYMjDgMQnPAOegQIaRAA" target="_blank" rel="noopener noreferrer">
              View on Google Map
            </a>
          }
       
          name= "Himalayan Mountains"
          date = "17 Feb, 2021 - 26 Feb 2021"
          text = "The Himalayas form the natural boundary between Nepal and China and form the border between the two countries. Of the many mountains of the Himalayan Range, Nepal is home to 31 of them, with eight of the fourteen 8,000+ meter mountains being in Nepal. Mount Everest, Mount Lhotse, Mount Makalu, and Mount Cho Oyu are shared with Tibet and lie directly on the Sino-Nepal border while Kangchenjunga is shared with India and lies on the border with Sikkim in the east of Nepal."
          />
          <EntryInfo
img="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f"
locationIcon="locationIcon.PNG"
country="France"
link={ <a
   href="https://www.google.com/maps/search/?api=1&query=Eiffel+Tower"
   target="_blank"
   rel="noopener noreferrer"
 >
View on Google Map </a>
}
name="Eiffel Tower"
date="10 Feb, 2022 - 18 Feb, 2022"
text="The Eiffel Tower is one of the most famous landmarks in Paris, France. Completed in 1889 for the World's Fair, this iron tower stands approximately 330 meters tall. Visitors can take lifts or climb stairs to enjoy spectacular views of Paris and its surrounding attractions."
/>

<EntryInfo
img="https://images.unsplash.com/photo-1516426122078-c23e76319801"
locationIcon="locationIcon.PNG"
country="Kenya"
link={ <a
   href="https://www.google.com/maps/search/?api=1&query=Maasai+Mara+National+Reserve"
   target="_blank"
   rel="noopener noreferrer"
 >
View on Google Map </a>
}
name="Maasai Mara National Reserve"
date="15 Jul, 2023 - 22 Jul, 2023"
text="The Maasai Mara National Reserve is a renowned wildlife destination in southwestern Kenya. It is famous for its lions, elephants, cheetahs, and the annual wildebeest migration. Visitors can enjoy guided game drives across its expansive grasslands and experience the region's remarkable wildlife and Maasai culture."
/>

</div>

  )
}