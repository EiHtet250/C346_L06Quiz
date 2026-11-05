import React,{useState} from 'react';
import {Text,ScrollView,Alert,Button} from 'react-native';
import QuestionBox from './components/QuestionsBox';

const MyApp =()=>{
  const [answer1, setAnswer1] = useState('Rose');
  const [answer2, setAnswer2] = useState('Rose');
  const [answer3, setAnswer3] = useState('Rose');
  const [answer4, setAnswer4] = useState('Rose');

  const FlowerOptions = ['Rose','Lavender','Star Flower', 'Sun Flower'];

  // correct answer
  const correct1 = 'Rose';
  const correct2 = 'Lavender';
  const correct3 = 'Star Flower';
  const correct4 = 'Sun Flower';


  return (
      <ScrollView>
        <Text></Text>
        <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>
           Guess FLower's Name
        </Text>
        <QuestionBox
          imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_k-84-k9EXNA_azhQiaKC0W2OWaRbpEsDX2NGuaJMfxFvT0WeXNg7Lpk&s=10"
          question ="What this flower's name?"
          options = {FlowerOptions}
          selected = {answer1}
          onValueChange = {(value)=>setAnswer1(value)}
          />
        <QuestionBox
          imageUrl= "https://static.wixstatic.com/media/5f2212_56e188e654574db5890c550e05750206~mv2.jpg/v1/fill/w_568,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5f2212_56e188e654574db5890c550e05750206~mv2.jpg"
          question ="What this flower's name?"
          options = {FlowerOptions}
          selected = {answer2}
          onValueChange = {(value)=>setAnswer2(value)}/>
        <QuestionBox
        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EUKJZBP8EIjTSGELzK-C70ilgHeIhp6R84axLoD2jzAM5D0vl91johU&s=10'
        question ="What this flower's name?"
        options = {FlowerOptions}
        selected = {answer3}
        onValueChange = {(value)=>setAnswer3(value)}/>
        <QuestionBox
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWvtM5hVoUN5bvIvYQA87xM3F6VoUFTuM5u-M5q2qMdpIkc0I3V1gvCI&s=10"
        question ="What this flower's name?"
        options = {FlowerOptions}
        selected = {answer4}
        onValueChange = {(value)=>setAnswer4(value)}/>
        <Button
            title="SUBMIT ANSWERS"
            onPress={() => {
              let score = 0;
              if (answer1 === correct1) {
                score = score + 1;
              }
              if (answer2 === correct2) {
                score = score + 1;
              }
              if (answer3 === correct3) {
                score = score + 1;
              }
              if (answer4 === correct4) {
                score = score + 1;
              }

              let feedback = 'You can do better next time.';
              if (score === 3) {
                feedback = 'Well done! Perfect score!';
              } else if (score === 2) {
                feedback = 'Good job!';
              }

              Alert.alert('You have ' + score + ' correct answers!', feedback);
            }}
        />

        <Text></Text>


      </ScrollView>
  );
}
export default MyApp;