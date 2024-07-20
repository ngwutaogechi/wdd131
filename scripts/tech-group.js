document.addEventListener("DOMContentLoaded", function() {
    // Set the current year dynamically
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set the last modified date dynamically
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last modified: ' + lastModified;
});
document.addEventListener('DOMContentLoaded', () => {
    // Example of DOM interaction and event handling
    const eventCalendar = document.getElementById('event-calendar');
    const eventRecaps = document.getElementById('event-recaps');
    const memberProfiles = document.getElementById('member-profiles');
    const joinForm = document.getElementById('join-form');

    // Mock data
    const events = [
        { date: '2024-07-25', title: 'JavaScript Workshop', location: 'Community Center' },
        { date: '2024-08-10', title: 'Tech Talk: AI and ML', location: 'Library Hall' }
    ];

    const recaps = [
        { date: '2024-06-15', title: 'Intro to Web Development', summary: 'A great event where we covered the basics of HTML, CSS, and JavaScript.', photos: ['img1.jpg', 'img2.jpg'], video: 'video1.mp4' },
        { date: '2024-05-20', title: 'Python for Data Science', summary: 'An engaging session on using Python for data analysis and visualization.', photos: ['img3.jpg', 'img4.jpg'], video: 'video2.mp4' }
    ];

    const members = [
        { name: 'John Doe', interests: 'Web Development, JavaScript' },
        { name: 'Jane Smith', interests: 'Data Science, Python' }
    ];

    // Display events
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.innerHTML = `<strong>${event.date}</strong> - ${event.title} at ${event.location}`;
        eventCalendar.appendChild(eventItem);
    });

    // Display event recaps
    recaps.forEach(recap => {
        const recapItem = document.createElement('div');
        recapItem.innerHTML = `<strong>${recap.date}</strong> - ${recap.title}<br>${recap.summary}`;
        eventRecaps.appendChild(recapItem);
    });

    // Display member profiles
    members.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.innerHTML = `<strong>${member.name}</strong><br>Interests: ${member.interests}`;
        memberProfiles.appendChild(memberItem);
    });

    // Form submission
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interests = document.getElementById('interests').value;

        if (name && email && interests) {
            const newMember = { name, email, interests };
            members.push(newMember);

            const newMemberItem = document.createElement('div');
            newMemberItem.innerHTML = `<strong>${newMember.name}</strong><br>Interests: ${newMember.interests}`;
            memberProfiles.appendChild(newMemberItem);

            joinForm.reset();
        }
    });
});
