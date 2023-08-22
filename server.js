const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dbConfig=require('./configs/db.config');
const callRecord=require('./models/callRecord');
const customerCommunication=require('./models/customerCommunication');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(8080,()=>{
    console.log("Application Started on the Port Number:8080")
});
mongoose
  .connect(dbConfig.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    init();
  })
  .catch((err) => {
    console.log(err);
  });
async function init(){
    await customerCommunication.collection.drop();
    try
    {
      const customerCommunication1= await customerCommunication.create({
        id: "53f67c3a-097e-436c-9b9e-2cf4dd6b13fa",
        userId: 1,
        type: "chat",
        domain: "Sales",
        direction: "inbound",
        from_num: "",
        text: "I'm sorry to hear that. Can you please provide me with your account email or username so I can take a look?",
        fromName: "Gus Dakas",
        toName: "Jane Doe",
        department: "Sales",
        timestamp: "2022-12-27T06:10:00.000Z",
      });
      const customerCommunication2= await customerCommunication.create({
        userId: 1,
        id: "420e3dc4-f0cb-407e-ab59-478dc18434a5",
        type: "chat",
        domain: "Sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Thank you for providing that information. Let me check the account and see what the issue might be.",
        fromName: "Gus Dakas",
        department: "Sales",
        toName: "Jane Doe",
        timestamp: "2022-12-27T06:15:00.000Z",
      });
      const customerCommunication3= await customerCommunication.create({
        id: "e39c96f4-2bf7-42ee-8888-c5a1b92d0218",
        userId: 1,
        type: "missed_call",
        domain: "",
        direction: "inbound",
        from_num: "+1234567890",
        text: "",
        fromName: "Jane Doe",
        toName: "Gus Dakas",
        toDepartment: "Sales",
        fromDepartment: "Customer",
        timestamp: "2022-12-29T03:15:00.000Z",
      });
      const customerCommunication4= await customerCommunication.create({
        id: "d35d7640-336a-4c96-aa27-bdb378ce70eb",
        userId: 1,
        type: "inbound_call",
        domain: "Sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Salesperson: Good morning! This is John from ABC Auto Dealership. I wanted to discuss our latest offer on our sleek sedan model. It's the perfect combination of style and performance. Customer: Hi, John. I'm interested in purchasing a new car, but I'm looking for something with excellent fuel efficiency. How does this sedan perform in that aspect? Salesperson: Great question! Our sedan boasts an impressive fuel economy, achieving up to 40 miles per gallon on the highway. It's perfect for long drives and daily commutes. Customer: That sounds promising. I also value safety features. Can you tell me about the sedan's safety ratings and advanced technologies? Salesperson: Absolutely! The sedan has received a top safety rating and is equipped with advanced features like lane departure warning, blind-spot monitoring, and automatic emergency braking. Your safety is our top priority. Customer: That's reassuring. Before I make a decision, could you share any current promotions or financing options available for this model? Salesperson: Of course! We have an ongoing promotion where you can enjoy zero percent financing for up to 60 months. Additionally, we offer attractive trade-in values. Let's discuss further to find the best deal for you.",
        chatGPTSummary:
          "<ul><li>The call was about Car deal.</li><li>The most important part of the call was customer was looking into Honda cars.</li> <li>The speakers in the conversation were Jane Doe and Gus Dakas<//li><ul>",
        fromName: "Gus Dakas",
        toName: "Jane Doe",
        department: "Sales",
        toDepartment: "Customer",
        fromDepartment: "Sales",
        timestamp: "2022-12-27T06:15:00.000Z",
      });
      const customerCommunication5= await customerCommunication.create({
        id: "213fbd08-89ee-4559-bf72-0f13d79a88ed",
        userId: 1,
        type: "vm",
        domain: "Sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Salesperson: Good morning! This is John from ABC Auto Dealership. I wanted to discuss our latest offer on our sleek sedan model. It's the perfect combination of style and performance. Let me know when you are back so that I can give you a call.",
        fromName: "Gus Dakas",
        toName: "Jane Doe",
        department: "Sales",
        chatGPTSummary:
          "<ul><li>The call was about Car deal.</li><li>The most important part of the call was customer was looking into Honda cars.</li> <li>The speakers in the conversation were Jane Doe and Gus Dakas<//li><ul>",
        toDepartment: "Customer",
        fromDepartment: "Sales",
        timestamp: "2022-12-27T06:15:00.000Z",
      });
      const customerCommunication6= await customerCommunication.create({
        id: "0c87435a-2562-4072-b0bd-a65fcc3ff798",
        userId: 1,
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "My account email is john@example.com",
        fromName: "Jane Doe",
        toName: "Gus Dakas",
        timestamp: "2022-12-27T06:15:00.000Z",
      });
      const customerCommunication7= await customerCommunication.create({
        id: "53f67c3a-097e-436c-9b9e-2cf4dd6b13fa",
        userId: 1,
        type: "chat",
        domain: "Sales",
        direction: "inbound",
        from_num: "",
        text: "I'm sorry to hear that. Can you please provide me with your account email or username so I can take a look?",
        fromName: "Gus Dakas",
        toName: "Jane Doe",
        department: "Sales",
        timestamp: "2022-12-27T06:10:00.000Z",
      });
      const customerCommunication8= await customerCommunication.create({
        id: "8b370f8f-1bc7-401b-9367-884c048df6f4",
        userId: 1,
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "I can't seem to log in to my account. It keeps giving me an error message.",
        fromName: "Jane Doe",
        toName: "Gus Dakas",
        timestamp: "2022-12-27T06:06:00.000Z",
      });
      const customerCommunication9= await customerCommunication.create({
        id: "f12a4da1-6d2a-4981-911a-90d7e8194d8b",
        userId: 1,
        type: "chat",
        domain: "Sales",
        direction: "inbound",
        from_num: "",
        text: "Hello! I'd be happy to assist you. Could you please provide me with your username or email address associated with the account?",
        fromName: "Gus Dakas",
        toName: "Jane Doe",
        department: "Sales",
        timestamp: "2022-12-27T05:58:00.000Z",
      });
      const customerCommunication10= await customerCommunication.create({
        id: "06ca443c-7686-4bff-8030-38fa8dbfad92",
        userId: 1,
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hello, I'm having trouble with my account. Can you please assist?",
        fromName: "Jane Doe",
        toName: "Gus Dakas",
        timestamp: "2022-12-27T05:56:00.000Z",
      });
      const customerCommunication11= await customerCommunication.create({
        userId: 2,
        id: "ed2a27ff-9b0b-4d2a-8f53-9ea6b26b93fa",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "My account email is michael@example.com",
        fromName: "Michael Simmons",
        toName: "Jenna Harris",
        timestamp: "2022-12-27T08:56:00.000Z",
      });
      const customerCommunication12= await customerCommunication.create({
        id: "d81c51b4-7f4f-4ae3-9516-277b09aaf7d3",
        type: "outbound_call",
        domain: "Marketing",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Salesperson: Good morning! This is John from ABC Auto Dealership. I wanted to discuss our latest offer on our sleek sedan model. It's the perfect combination of style and performance. Customer: Hi, John. I'm interested in purchasing a new car, but I'm looking for something with excellent fuel efficiency. How does this sedan perform in that aspect? Salesperson: Great question! Our sedan boasts an impressive fuel economy, achieving up to 40 miles per gallon on the highway. It's perfect for long drives and daily commutes. Customer: That sounds promising. I also value safety features. Can you tell me about the sedan's safety ratings and advanced technologies? Salesperson: Absolutely! The sedan has received a top safety rating and is equipped with advanced features like lane departure warning, blind-spot monitoring, and automatic emergency braking. Your safety is our top priority. Customer: That's reassuring. Before I make a decision, could you share any current promotions or financing options available for this model? Salesperson: Of course! We have an ongoing promotion where you can enjoy zero percent financing for up to 60 months. Additionally, we offer attractive trade-in values. Let's discuss further to find the best deal for you.",
        chatGPTSummary:
          "<ul><li>The call was about Car deal.</li><li>The most important part of the call was customer was looking into Honda cars.</li> <li>The speakers in the conversation were Jane Doe and Gus Dakas<//li><ul>",
        fromName: "Jenna Harris",
        toName: "Michael Simmons",
        userId: 2,
        toDepartment: "Customer",
        fromDepartment: "Marketing",
        timestamp: "2022-12-27T06:40:00.000Z",
      });
      const customerCommunication13= await customerCommunication.create({
        id: "06f5f45f-22e7-431b-b9f5-f6a971e78012",
        type: "chat",
        domain: "Marketing",
        direction: "inbound",
        from_num: "",
        text: "Can you please provide me with your account email or username so I can take a look?",
        fromName: "Jenna Harris",
        department: "Marketing",
        toName: "Michael Simmons",
        userId: 2,
        timestamp: "2022-12-27T06:33:00.000Z",
      });
      const customerCommunication14= await customerCommunication.create({
        id: "72e99188-e782-4d9e-867c-cee885f6c8d1",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "It keeps giving me an error message.",
        fromName: "Michael Simmons",
        userId: 2,
        toName: "Jenna Harris",
        timestamp: "2022-12-27T06:09:00.000Z",
      });
      const customerCommunication15= await customerCommunication.create({
        id: "a62068d1-4d3c-489c-82de-29b5a448b8c7",
        type: "chat",
        domain: "Marketing",
        direction: "inbound",
        from_num: "",
        text: "What seems to be the problem?",
        fromName: "Jenna Harris",
        department: "Marketing",
        toName: "Michael Simmons",
        userId: 2,
        timestamp: "2022-12-27T06:06:00.000Z",
      });
      const customerCommunication16= await customerCommunication.create({
        id: "7e292ec9-4795-4e0d-a817-e5adb6a73182",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hello, how are you doing?",
        fromName: "Michael Simmons",
        userId: 2,
        toName: "Jenna Harris",
        timestamp: "2022-12-27T05:56:00.000Z",
      });
      const customerCommunication17= await customerCommunication.create({
        userId: 3,
        id: "ba71926c-2e0d-4144-9c64-2338ea0e0632",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hello, I'm interested in purchasing a car. Can you provide me with some information on the available models?",
        fromName: "Tim Sullivan",
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-14T10:00:00.000Z",
      });
      const customerCommunication18= await customerCommunication.create({
        id: "56c4a8dd-0f43-4bd3-b1dc-9e2645e30869",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hi Tim, this is Asur Joshi from XYZ Motors. We have a range of car models available. Can you please let me know your preferences or any specific features you're looking for?",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Tim Sullivan",
        userId: 3,
        timestamp: "2023-06-14T10:08:00.000Z",
      });
      const customerCommunication19= await customerCommunication.create({
        id: "9e80b584-8909-4aca-9353-407d44cf1369",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hi Asur, I'm interested in purchasing the XYZ car model. Can you provide me with more information on the pricing and available options?",
        fromName: "Tim Sullivan",
        userId: 3,
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-15T10:30:00.000Z",
      });
      const customerCommunication20= await customerCommunication.create({
        id: "b7a1b5b4-9ec6-45aa-b39d-03b6ff18a42c",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Tim, this is Asur Joshi from XYZ Motors. I have the pricing details and available options for the XYZ car model ready. Shall I email them to you?",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Tim Sullivan",
        userId: 3,
        timestamp: "2023-06-15T11:05:00.000Z",
      });
      const customerCommunication21= await customerCommunication.create({
        id: "1120a3a5-642d-491d-a5c9-73cb563228cc",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Sure, Asur. Please email me the pricing details and options at nikhil@example.com. Also, do you offer any financing options?",
        fromName: "Tim Sullivan",
        userId: 3,
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-15T11:12:00.000Z",
      });
      const customerCommunication22= await customerCommunication.create({
        id: "1373e396-dca0-4182-a078-d75d7d6b17f0",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hi Tim, I have emailed you the pricing details and options for the XYZ car model at nikhil@example.com. Regarding financing options, we offer competitive rates and flexible payment plans. Let me know if you have any further questions!",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Tim Sullivan",
        userId: 3,
        timestamp: "2023-06-15T11:25:00.000Z",
      });
      const customerCommunication23= await customerCommunication.create({
        id: "402ac963-41e6-4e8e-89a3-ebc50142adcf",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Thank you, Asur. I have received the email. I'll review the pricing details and get back to you soon.",
        fromName: "Tim Sullivan",
        userId: 3,
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-16T09:30:00.000Z",
      });
      const customerCommunication24= await customerCommunication.create({
        id: "098138bd-fa09-40db-a0fd-742b407b6d12",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Tim, this is Asur Joshi. Take your time to review the pricing details. If you have any questions or need further assistance, feel free to reach out. I'm here to help!",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Tim Sullivan",
        userId: 3,
        timestamp: "2023-06-16T10:15:00.000Z",
      });
      const customerCommunication25= await customerCommunication.create({
        id: "474d91a9-393c-4457-b5e3-1f41736a0369",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hi Asur, I have reviewed the pricing details and options. I'm interested in scheduling a test drive. Can you provide me with the available dates and times?",
        fromName: "Tim Sullivan",
        userId: 3,
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-17T11:20:00.000Z",
      });
      const customerCommunication26= await customerCommunication.create({
        id: "25617f22-fd58-4ec2-9f1f-5e8b7eb83ae5",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Tim, I'm glad to hear that you're interested in a test drive. Let me check the availability and get back to you with the available dates and times shortly.",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Tim Sullivan",
        userId: 3,
        timestamp: "2023-06-17T11:30:00.000Z",
      });
      const customerCommunication27= await customerCommunication.create({
        userId: 4,
        id: "4268814d-1672-479f-8343-c42cbd7599db",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hello, I'm interested in purchasing a car. Can you provide me with some information on the available models?",
        fromName: "Tom Hardy",
        department: "Sales",
        toName: "Namita Kyal",
        timestamp: "2023-06-14T10:00:00.000Z",
      });
      const customerCommunication28= await customerCommunication.create({
        userId: 4,
        id: "e555304a-95aa-418e-84af-79d4683f8655",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hi Tom, this is Asur Joshi from XYZ Motors. We have a range of car models available. Can you please let me know your preferences or any specific features you're looking for?",
        fromName: "Namita Kyal",
        department: "Sales",
        toName: "Tom Hardy",
        timestamp: "2023-06-14T10:08:00.000Z",
      });
      const customerCommunication29= await customerCommunication.create({
        userId: 4,
        id: "93763f1c-fcc1-4897-b7f9-2ab4bd64727a",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hi Namita, I'm interested in purchasing the XYZ car model. Can you provide me with more information on the pricing and available options?",
        fromName: "Tom Hardy",
        department: "Sales",
        toName: "Namita Kyal",
        timestamp: "2023-06-15T10:30:00.000Z",
      });
      const customerCommunication30= await customerCommunication.create({
        userId: 4,
        id: "b20c132e-4284-4c6b-88ee-59c98cd1d6b5",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Tom, this is Namita Kyal from XYZ Motors. I have the pricing details and available options for the XYZ car model ready. Shall I email them to you?",
        fromName: "Namita Kyal",
        department: "Sales",
        toName: "Tom Hardy",
        timestamp: "2023-06-15T11:05:00.000Z",
      });
      const customerCommunication31= await customerCommunication.create({
        userId: 4,
        id: "76b5cebd-0f3e-4266-aba0-295b3a1d2bf6",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Sure, Namita. Please email me the pricing details and options at nikhil@example.com. Also, do you offer any financing options?",
        fromName: "Tom Hardy",
        department: "Sales",
        toName: "Namita Kyal",
        timestamp: "2023-06-15T11:12:00.000Z",
      });
      const customerCommunication32= await customerCommunication.create({
        userId: 4,
        id: "",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hi Tom, I have emailed you the pricing details and options for the XYZ car model at nikhil@example.com. Regarding financing options, we offer competitive rates and flexible payment plans. Let me know if you have any further questions!",
        fromName: "Namita Kyal",
        department: "Sales",
        toName: "Tom Hardy",
        timestamp: "2023-06-15T11:25:00.000Z",
      });
      const customerCommunication33= await customerCommunication.create({
        userId: 4,
        id: "9e2035a8-6d0c-4a4a-9389-7435e0498abc",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Thank you, Namita. I have received the email. I'll review the pricing details and get back to you soon.",
        fromName: "Tom Hardy",
        department: "Sales",
        toName: "Namita Kyal",
        timestamp: "2023-06-16T09:30:00.000Z",
      });
      const customerCommunication34= await customerCommunication.create({
        userId: 4,
        id: "78441e5a-7639-420f-8163-201c0dff35c1",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Tom, this is Namita Kyal. Take your time to review the pricing details. If you have any questions or need further assistance, feel free to reach out. I'm here to help!",
        fromName: "Namita Kyal",
        department: "Sales",
        toName: "Tom Hardy",
        timestamp: "2023-06-16T10:15:00.000Z",
      });
      const customerCommunication35= await customerCommunication.create({
        userId: 4,
        id: "d10797c3-eb20-46a4-9328-3880e0de2cb8",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hi Namita, I have reviewed the pricing details and options. I'm interested in scheduling a test drive. Can you provide me with the available dates and times?",
        fromName: "Tom Hardy",
        department: "Sales",
        toName: "Namita Kyal",
        timestamp: "2023-06-17T11:20:00.000Z",
      });
      const customerCommunication36= await customerCommunication.create({
        id: "7f4113df-b65e-4260-80c1-2794cd2f44f7",
        userId: 4,
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Tom, I'm glad to hear that you're interested in a test drive. Let me check the availability and get back to you with the available dates and times shortly.",
        fromName: "Namita Kyal",
        department: "Sales",
        toName: "Tom Hardy",
        timestamp: "2023-06-17T11:30:00.000Z",
      });
      const customerCommunication37= await customerCommunication.create({
        userId: 5,
        id: "abd38961-f57e-41d2-9fb9-c50dbc6979a2",
        type: "missed_call",
        domain: "",
        direction: "inbound",
        from_num: "11234565656",
        text: "",
        fromName: "Shaurya Verma",
        toName: "Namita Kyal",
        toDepartment: "Sales",
        fromDepartment: "Customer",
        timestamp: "2022-12-29T03:15:00.000Z",
      });
      const customerCommunication38= await customerCommunication.create({
        userId: 5,
        id: "d89a666d-b567-4072-9371-cbe01d0e966a",
        type: "vm",
        domain: "Sales",
        direction: "inbound",
        from_num: "11234565656",
        text: "Thank you for calling us. We will be right back at you",
        fromName: "Namita Kyal",
        department: "Sales",
        toName: "Shaurya Verma",
        toDepartment: "Customer",
        fromDepartment: "Sales",
        timestamp: "2022-12-27T06:15:00.000Z",
      });
      const customerCommunication39= await customerCommunication.create({
        userId: 6,
        id: "3b9e02f9-874e-464e-ad33-ecc0cfe91c94",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hello, I'm interested in purchasing a car. Can you provide me with some information on the available models?",
        fromName: "Nikhil Bhardwaj",
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-14T10:00:00.000Z",
      });
      const customerCommunication40= await customerCommunication.create({
        id: "e3a8320e-fce1-41f3-b360-618d811c08b6",
        userId: 6,
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hi Nikhil, this is Asur Joshi from XYZ Motors. We have a range of car models available. Can you please let me know your preferences or any specific features you're looking for?",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Nikhil Bhardwaj",
        timestamp: "2023-06-14T10:08:00.000Z",
      });
      const customerCommunication41= await customerCommunication.create({
        id: "dec5dc66-f9ab-49ad-9c72-91463bca1842",
        type: "chat",
        userId: 6,
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hi Asur, I'm interested in purchasing the XYZ car model. Can you provide me with more information on the pricing and available options?",
        fromName: "Nikhil Bhardwaj",
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-15T10:30:00.000Z",
      });
      const customerCommunication42= await customerCommunication.create({
        id: "ff2f96e9-6c7c-4a54-8335-805b828f6673",
        userId: 6,
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Nikhil, this is Asur Joshi from XYZ Motors. I have the pricing details and available options for the XYZ car model ready. Shall I email them to you?",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Nikhil Bhardwaj",
        timestamp: "2023-06-15T11:05:00.000Z",
      });
      const customerCommunication43= await customerCommunication.create({
        id: "01b60e95-c83e-4f7d-816b-387ee062a05b",
        type: "chat",
        userId: 6,
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Sure, Asur. Please email me the pricing details and options at nikhil@example.com. Also, do you offer any financing options?",
        fromName: "Nikhil Bhardwaj",
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-15T11:12:00.000Z",
      });
      const customerCommunication44= await customerCommunication.create({
        id: "b17f6e36-c502-4e53-9475-d3f48d2b1068",
        userId: 6,
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hi Nikhil, I have emailed you the pricing details and options for the XYZ car model at nikhil@example.com. Regarding financing options, we offer competitive rates and flexible payment plans. Let me know if you have any further questions!",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Nikhil Bhardwaj",
        timestamp: "2023-06-15T11:25:00.000Z",
      });
      const customerCommunication45= await customerCommunication.create({
        id: "5d77c7ff-99f5-4db5-949c-5227e94e17a8",
        userId: 6,
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Thank you, Asur. I have received the email. I'll review the pricing details and get back to you soon.",
        fromName: "Nikhil Bhardwaj",
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-16T09:30:00.000Z",
      });
      const customerCommunication46= await customerCommunication.create({
        id: "53c04fbe-cc05-4ab9-be4e-44df91fbf2d0",
        userId: 6,
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Nikhil, this is Asur Joshi. Take your time to review the pricing details. If you have any questions or need further assistance, feel free to reach out. I'm here to help!",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Nikhil Bhardwaj",
        timestamp: "2023-06-16T10:15:00.000Z",
      });
      const customerCommunication47= await customerCommunication.create({
        id: "44d9fb58-e249-4d1e-9e0e-3b116f31c9ca",
        userId: 6,
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hi Asur, I have reviewed the pricing details and options. I'm interested in scheduling a test drive. Can you provide me with the available dates and times?",
        fromName: "Nikhil Bhardwaj",
        department: "Sales",
        toName: "Asur Joshi",
        timestamp: "2023-06-17T11:20:00.000Z",
      });
      const customerCommunication48= await customerCommunication.create({
        userId: 6,
        id: "947fdfde-f9b4-4ad3-83ca-93480cb313ad",
        type: "chat",
        domain: "sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Hello Nikhil, I'm glad to hear that you're interested in a test drive. Let me check the availability and get back to you with the available dates and times shortly.",
        fromName: "Asur Joshi",
        department: "Sales",
        toName: "Nikhil Bhardwaj",
        timestamp: "2023-06-17T11:30:00.000Z",
      });
      const customerCommunication49= await customerCommunication.create({
        userId: 7,
        id: "7949cf63-848d-43c4-89b7-14067681a56a",
        type: "vm",
        domain: "Marketing",
        direction: "inbound",
        from_num: "11234565656",
        text: "Thank you for calling us. We will be right back at you",
        fromName: "Jenna Harris",
        department: "Marketing",
        toName: "Ugo Akuwudike",
        toDepartment: "Customer",
        fromDepartment: "Marketing",
        timestamp: "2022-12-27T06:15:00.000Z",
      });
      const customerCommunication50= await customerCommunication.create({
        userId: 7,
        id: "8ba7c63d-3700-4ab0-a21d-15a63f058e6b",
        type: "outbound_call",
        domain: "Marketing",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Salesperson: Good morning! This is John from ABC Auto Dealership. I wanted to discuss our latest offer on our sleek sedan model. It's the perfect combination of style and performance. Customer: Hi, John. I'm interested in purchasing a new car, but I'm looking for something with excellent fuel efficiency. How does this sedan perform in that aspect? Salesperson: Great question! Our sedan boasts an impressive fuel economy, achieving up to 40 miles per gallon on the highway. It's perfect for long drives and daily commutes. Customer: That sounds promising. I also value safety features. Can you tell me about the sedan's safety ratings and advanced technologies? Salesperson: Absolutely! The sedan has received a top safety rating and is equipped with advanced features like lane departure warning, blind-spot monitoring, and automatic emergency braking. Your safety is our top priority. Customer: That's reassuring. Before I make a decision, could you share any current promotions or financing options available for this model? Salesperson: Of course! We have an ongoing promotion where you can enjoy zero percent financing for up to 60 months. Additionally, we offer attractive trade-in values. Let's discuss further to find the best deal for you.",
        chatGPTSummary:
          "<ul><li>The call was about Car deal.</li><li>The most important part of the call was customer was looking into Honda cars.</li> <li>The speakers in the conversation were Jane Doe and Gus Dakas<//li><ul>",
        fromName: "Jenna Harris",
        toName: "Ugo Akuwudike",
        toDepartment: "Customer",
        fromDepartment: "Marketing",
        timestamp: "2022-12-27T06:40:00.000Z",
      });
      const customerCommunication51= await customerCommunication.create({
        userId: 7,
        id: "1e4d08eb-822b-4b6b-957a-4ca7631adab3",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "It keeps giving me an error message.",
        fromName: "Ugo Akuwudike",
        toName: "Jenna Harris",
        timestamp: "2022-12-27T06:09:00.000Z",
      });
      const customerCommunication52= await customerCommunication.create({
        userId: 7,
        id: "b61854be-7a9e-4c2b-a640-a1333dd8e605",
        type: "chat",
        domain: "Marketing",
        direction: "inbound",
        from_num: "",
        text: "What seems to be the problem?",
        fromName: "Jenna Harris",
        department: "Marketing",
        toName: "Ugo Akuwudike",
        timestamp: "2022-12-27T06:06:00.000Z",
      });
      const customerCommunication53= await customerCommunication.create({
        userId: 7,
        id: "9fb966ed-67dc-488d-900a-9328a6ae2160",
        type: "chat",
        domain: "customer",
        direction: "outbound",
        from_num: "+1234567890",
        text: "Hello, how are you doing?",
        fromName: "Ugo Akuwudike",
        toName: "Jenna Harris",
        timestamp: "2022-12-27T05:56:00.000Z",
      });
        console.log("Customer Communications Created")
    }
    catch(e)
    {
        console.error(e.message)
    }

    await callRecord.collection.drop();
    try
    {
        const callRecord1= await callRecord.create({
            name: "Jane Doe",
            phoneNumber: "+1234567890",
            id: 1,
            startTime: "2022-12-27T06:15:00.000Z",
        });
        const callRecord2= await callRecord.create({
            name: "Michael Simmons",
            phoneNumber: "+1483274390",
            id: 2,
            startTime: "2022-12-27T08:56:00.000Z",
        });
        const callRecord3= await callRecord.create({
            name: "Tim Sullivan",
            phoneNumber: "+1234566874",
            id: 3,
            startTime: "2023-06-14T10:00:00.000Z",
        });
        const callRecord4= await callRecord.create({
            name: "Tom Hardy",
            phoneNumber: "+1234565656",
            id: 4,
            startTime: "2023-06-14T10:00:00.000Z",
        });
        const callRecord5= await callRecord.create({
            name: "Shaurya Verma",
            phoneNumber: "+1234565656",
            id: 5,
            startTime: "2022-12-29T03:15:00.000Z",
        });
        const callRecord6= await callRecord.create({
            name: "Nikhil Bhardwaj",
            phoneNumber: "+1756582284",
            id: 6,
            startTime: "2023-06-14T10:00:00.000Z",
        });
        const callRecord7= await callRecord.create({
            name: "Ugo Akuwudike",
            phoneNumber: "+1788776655",
            id: 7,
            startTime: "2022-12-27T06:15:00.000Z",
        });
        console.log("Call Records created")
    }
    catch(e)
    {
        console.error(e.message)
    }
const resultRoutes=require('./routes/result.route');
resultRoutes(app);
}
