$(function () {
    // title part
    var resume = new ContentManger(NODES.title);
    resume.setTitle('Shikan Chen\'s Resume');
    resume.p(resume.createNewObj('img', {src:'head.jpg'}));
    resume.p(resume.createNewObj('h1', {text:INFO.legal_name}));
    resume.p(resume.createNewObj('h2', {text:INFO.motto}));

    // left info part
    resume.setTarget(NODES.side_info);
    resume.addSkill('Programming Language Skills', {'Java':90,'PHP':75,'JavaScript':70,'Python':65});
    resume.addSkill('Other Skills', {'Linux/Unix':60,'Web Development':80});
    resume.addSkill('Language', {'Mandarin':95,'English':90});

    // contact part
    resume.setTarget(NODES.contact);
    resume.addBookmark('Contact');
    resume.addContactDetails({'Email':'chens24@rpi.edu','Phone':'+1 (518)9495499','Address':'Burdett Ave 1999, Troy, NY','Github':'shikanchen'});

    // experience part
    resume.setTarget(NODES.experience);
    resume.addBookmark('Education');
    resume.addOneRecord('Ningbo Foreign Language School AP Center','China','2013-2017', 'http://www.ningwai.net');
    resume.addOneRecord('Rensselaer Polytechnic Institute','Troy NY','2017-?', 'https://rpi.edu');
    resume.addBookmark('Working Experience');
    resume.addOneRecord('Huiyou Technology Software Development Lab', 'China', '2017 Summer', 'http://www.365hy.com');
    resume.addOneRecord('global blockchain index research group of scry.INFO', 'Troy NY', '2017 Winter', 'https://www.scry.info');

    // project part
    resume.setTarget(NODES.project);
    resume.addBookmark('Projects');
    resume.setTarget(BOOKMARK['Projects']);
    resume.p(resume.createNewObj('ul',{class:'exp'})).setTarget('.exp');

    resume.addProject('GBIManager','A python extension for calculating global blockchain index, designed during an intern in winter, 2017.');
    resume.addProject('No.100','Everyday Idea Logger.');
    resume.addProject('Container.js','JavaScript Plug-in for implementing Container.');
    resume.addProject('Terminal','A web-based Terminal emulator for Linux.');
    resume.addProject('EPlanner','A web-based tool for chinese students to generate a plan of memorizing vocabulary.');
    resume.addProject('Auto-Snake','A snake Game with Auto Path AI.');
});