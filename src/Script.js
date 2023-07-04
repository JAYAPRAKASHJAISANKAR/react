// script.js
let gapiLoaded = false;

// Load the Gmail API client library
function loadGmailApi() {
  gapi.client.load("gmail", "v1", () => {
    gapiLoaded = true;
  });
}

// Send email using Gmail API
function sendEmail(task, email) {
  if (!gapiLoaded) {
    console.log("Gmail API not yet loaded");
    return;
  }

  const emailContent = `
    Subject: Task Alarm
    To: ${email}
    
    Task: ${task.task}
    Date: ${task.date}
    Time: ${task.time}
  `;

  const request = gapi.client.gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: btoa(emailContent).replace(/\+/g, "-").replace(/\//g, "_"),
    },
  });

  request.execute((response) => {
    console.log(response);
  });
}

// Set the alarm when the button is clicked
document.getElementById("setAlarmButton").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const task = {
    task: "Sample Task",
    date: "2023-07-05",
    time: "09:00",
  };

  // Send email
  sendEmail(task, email);

  // Display alarm notification in Chrome browser
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Alarm", {
      body: `Task: ${task.task}\nDate: ${task.date}\nTime: ${task.time}`,
    });
  }
});

// Load the Gmail API
gapi.load("client", loadGmailApi);
