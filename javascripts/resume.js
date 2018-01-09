$(function () {
    // title part
    var resume = new ContentManger(NODES.title);
    resume.p(resume.createNewObj('img', {src:'head.jpg'}));
    resume.p(resume.createNewObj('h1', {text:INFO.legal_name}));
    resume.p(resume.createNewObj('h2', {text:INFO.motto}));

    // left info part
    resume.setTarget(NODES.side_info);
    resume.addSkill('Programming Language Skills', {'Java':90,'PHP':75,'JavaScript':70,'Python':65});
    resume.addSkill('Other Skills', {'Linux/Unix':60,'Web Development':80});
    resume.addSkill('Language', {'Mandarin':95,'English':90});

    // project
    resume.setTarget(NODES.bookmark);
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