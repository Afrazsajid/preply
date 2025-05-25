
# Sarah - Projective AI Voice Agent for Sailani

**Sara** is a cutting-edge AI voice assistant built specifically for **Sailani Education Foundation** to handle **24/7 registration, support, and real-time interaction**. Designed with ease-of-use and automation in mind, Sara simplifies the user journey from registration to data integration, while maintaining full administrative transparency.

---

## Key Features

### 1. **24/7 AI-Powered Registration & Support**

* Sara can **register users any time of day**, guiding them through the process via **natural voice interaction**.
* Built on **projective AI** principles, it understands user intent and offers tailored responses and assistance.

### 2. **Program-Specific Guidance**

* If a user wants to join a specific program, Sara collects their **detailed preferences and interests**.
* Relevant program information is offered dynamically, including **faculty insights** and **event schedules**.

### 3. **Real-Time Data Integration**

* All collected data is **instantly fed into a shared Google Sheet** using **Make.com**.
* **Live Sheet**: [Click here to view the real-time registration sheet](https://docs.google.com/spreadsheets/d/1cZDOybI5KKxMmEMbvx60f-koFgrqduONTSao8WAOo1I/edit?usp=drivesdk) 
  This transparency allows administrators and team members to verify and monitor data updates in real-time.

### 4. **Instant Email Confirmation + ID Card**

* Upon successful registration:

  * The user receives a **confirmation email**.
  * A **digital ID card** with a **unique roll number** is generated and sent using **Make.com**.

### 5. **Voice + Text Interaction**

* Sara uses:

  * **EventLabs** for live voice interaction.
  * **Devendra TTS** for fast, natural-sounding text-to-speech with **minimal latency**.
  * **Vector database integration** to store and dynamically query prior interactions.

### 6. **Comprehensive Knowledge Base**

* Sara is trained to answer FAQs, faculty details, course content, event schedules, and fee structure.
* Maintains up-to-date information through regular **vector-based retraining** and **dynamic querying**.

---

## Tech Stack

| Component       | Technology Used                     |
| --------------- | ----------------------------------- |
| Voice Interface | EventLapse                          |
| Text-to-Speech  | Devendra TTS (low-latency)          |
| Automation      | Make.com                            |
| Web Interface   | Next js                |
| Database        | Vector DB (e.g., Pinecone/Weaviate) |
| Data Logging    | Google Sheets (https://docs.google.com/spreadsheets/d/1cZDOybI5KKxMmEMbvx60f-koFgrqduONTSao8WAOo1I/edit?usp=drivesdk)           |
| Email System    | Nodemail with nextjs            |

---

## Why Sarah?

* **Cost-Effective**: Uses open cluster model and efficient services to minimize costs and latency .
* **Dynamic**: Learns and adapts based on usage and data trends.
* **Transparent**: Live data sheets keep all stakeholders informed.
* **Scalable**: Easily expandable to support more use-cases and departments.

---

## Getting Started

1. Speak to Sarah to begin your registration.
2. after you registered Wait for the confirmation email and your digital ID.
3. Check your information in the **live data sheet link(https://docs.google.com/spreadsheets/d/1cZDOybI5KKxMmEMbvx60f-koFgrqduONTSao8WAOo1I/edit?usp=drivesdk)**.
4. Ask Sarah anything—programs, faculty, fees, or events.

---

## Future Enhancements

* Multilingual support.
* Offline capability.
* Admin dashboard for real-time analytics 

---

*Sara is not just a voice bot; it's a smart, proactive assistant helping Sailani run smarter.*

---

