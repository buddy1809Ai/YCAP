show databases;
create database newdb;
use newdb;
create table tb2(
rollno int primary key, 
fullname varchar(50) not null, 
branch char(5) default 'AIDSA', 
mark tinyint, 
grade char(1), 
fezz float default 6500.18, 
addr varchar(100),
constraint chk_mark check (mark>=0 && mark<100)
);

describe tb2;

alter table tb2
modify addr varchar(100) unique,
modify mark tinyint constraint chk_mark check (mark>=0 and mark<100);

alter table tb2 
change column fezz fees float default 6500.18;
# change column old_name necolm_nm dataType contraint;

alter table tb2
add column result char(4);

alter table tb2
drop column result;
/* update */ 

insert into tb2
value (101, "mandar underworld", "mech", 10.20, "F", 200000, "galay hopital");

insert into tb2 (rollno, fullname, mark, grade, fees, addr, branch)
values 
(102, "nathu pandy", 50.20, "C", 2989956.23, "koradi", "civil"),
(103, "dev fundviy", 79.29, "B", 498956.23, "manvada", "elect");

insert into tb2 (rollno, fullname, mark, grade, addr, branch)
values 
(105, "gaurav", 59.20, "C", "golimar", "civil"),
(104, "honey zing", 99.29, "A", "delhi", "elect");

insert into tb2 (rollno, fullname, mark, grade, addr, branch)
values 
(109, "raam", 90.20, "C", "goa", ""),
(108, "lakhan", 79.29, "B", "mumbai", ""),
(107, "ayuh man", 89.29, "A", "nagpur", "");

insert into tb2 (rollno, fullname, branch, mark, grade, fees)
value (106, "jatin ram", "aidc", 91.90, "A", 200000);

select * from tb2;

update tb2
set branch= "ai_ml" , fees= 82458.71
where branch = "";

set sql_safe_updates = 0;

update tb2
set addr= "YCCE"
where addr is null;

select fullname, mark, grade from tb2 where mark>50 order by mark desc limit 9;

INSERT INTO tb2 (rollno, fullname, branch, mark, grade, fees, addr)
VALUES
(110, 'Isha Gupta',         'DSC',   76, 'B',  7100.00, 'Hudkeshwar, Nagpur'),

(111, 'Siddharth Rao',      'AIML',  91, 'A',  6500.18, 'Wardhaman Nagar, Nagpur'),
(112, 'Neha Pawar',         'AIDSA', 83, 'A',  6800.50, 'Nandanvan, Nagpur'),
(113, 'Kunal Yadav',        'DSC',   59, 'C',  6500.18, 'Mahal, Nagpur'),
(114, 'Pooja Choudhary',    'AIML',  88, 'A',  7300.00, 'Civil Lines, Nagpur'),
(115, 'Akash More',         'AIDSA', 72, 'B',  6500.18, 'Pardi, Nagpur'),
(116, 'Megha Borkar',       'DSC',   94, 'A',  7600.00, 'Khamla, Nagpur'),
(117, 'Yash Thakur',        'AIML',  65, 'C',  6500.18, 'Rameshwari, Nagpur'),
(118, 'Simran Kaur',        'AIDSA', 79, 'B',  6900.75, 'Lakadganj, Nagpur'),
(119, 'Omkar Wankhede',     'DSC',   86, 'A',  6500.18, 'Kamptee Road, Nagpur'),
(120, 'Tanvi Mishra',       'AIML',  90, 'A',  7100.50, 'Koradi Road, Nagpur'),

(121, 'Harsh Vaidya',       'AIDSA', 77, 'B',  6500.18, 'Gorewada, Nagpur'),
(122, 'Riya Sahu',          'DSC',   93, 'A',  7400.00, 'Panchpaoli, Nagpur'),
(123, 'Manav Agrawal',      'AIML',  71, 'B',  6500.18, 'Ayodhya Nagar, Nagpur'),
(124, 'Sakshi Bhoyar',      'AIDSA', 84, 'A',  6800.25, 'Dighori, Nagpur'),
(125, 'Nikhil Bansode',     'DSC',   62, 'C',  6500.18, 'Mankapur, Nagpur'),
(126, 'Aditi Gawande',      'AIML',  95, 'A',  7700.00, 'Friends Colony, Nagpur'),
(127, 'Dev Malviya',        'AIDSA', 80, 'B',  6500.18, 'Shankar Nagar, Nagpur'),
(128, 'Shreya Dube',        'DSC',   87, 'A',  7000.00, 'Pratap Nagar, Nagpur'),
(129, 'Mohit Kapse',        'AIML',  69, 'C',  6500.18, 'Omkar Nagar, Nagpur'),
(130, 'Anushka Raut',       'AIDSA', 91, 'A',  7200.00, 'Bardi, Nagpur'),

(131, 'Ayush Chavan',       'DSC',   75, 'B',  6500.18, 'Kharbi, Nagpur'),
(132, 'Muskan Khan',        'AIML',  89, 'A',  6800.00, 'Jafar Nagar, Nagpur'),
(133, 'Tejas Zade',         'AIDSA', 64, 'C',  6500.18, 'Bharat Nagar, Nagpur'),
(134, 'Nandini Raut',       'DSC',   98, 'A',  7900.00, 'Laxmi Nagar, Nagpur'),
(135, 'Parth Soni',         'AIML',  82, 'A',  6500.18, 'Shastri Nagar, Nagpur'),
(136, 'Diya Mahajan',       'AIDSA', 73, 'B',  6900.00, 'Ramdaspeth, Nagpur'),
(137, 'Arjun Kale',         'DSC',   88, 'A',  6500.18, 'Somalwada, Nagpur'),
(138, 'Mansi Patil',        'AIML',  79, 'B',  7100.00, 'Telankhedi, Nagpur'),
(139, 'Saurabh Bhat',       'AIDSA', 67, 'C',  6500.18, 'Itwari, Nagpur'),
(140, 'Komal Wagh',         'DSC',   92, 'A',  7500.00, 'Gandhibagh, Nagpur'),

(141, 'Varun Jadhav',       'AIML',  85, 'A',  6500.18, 'Nehru Nagar, Nagpur'),
(142, 'Ritika Singh',       'AIDSA', 78, 'B',  6800.00, 'Chhatrapati Nagar, Nagpur'),
(143, 'Akshay Bhagat',      'DSC',   90, 'A',  6500.18, 'Somalwada Extension, Nagpur'),
(144, 'Pallavi Wankhede',   'AIML',  61, 'C',  7200.00, 'Jaitala, Nagpur'),
(145, 'Vishal Dandekar',    'AIDSA', 83, 'A',  6500.18, 'Dattawadi, Nagpur'),
(146, 'Rashmi Korde',       'DSC',   97, 'A',  7600.00, 'Seminary Hills, Nagpur'),
(147, 'Chirag Sahu',        'AIML',  70, 'B',  6500.18, 'Beltarodi, Nagpur'),
(148, 'Sana Sheikh',        'AIDSA', 86, 'A',  6900.00, NULL),
(149, 'Abhishek Pande',     'DSC',   NULL, NULL, 6500.18, 'Medical Square, Nagpur'),
(150, 'Ishita Joshi',       'AIML',  NULL, NULL, NULL, NULL),
(151, 'Aarav Sharma',       'AIDSA', 87, 'A',  null, 'Jaripatka, Nagpur'),
(152, 'Ananya Patil',       null, 92, 'A',  7200.50, 'Manish Nagar, Nagpur'),
(153, 'Rohan Deshmukh',     'AIML',  78, 'B',  null, 'Besa, Nagpur'),
(154, 'Sneha Kulkarni',     'AIDSA', 85, 'A',  6800.00, null),
(155, 'Aditya Joshi',       'DSC',  null, 'B',  6500.18, 'Trimurti Nagar, Nagpur'),
(156, 'Priya Nair',         null,  96, 'A',  7500.75, 'Sadar, Nagpur'),
(157, 'Rahul Shinde',       'DSC',   null, 'C',  6500.18, 'Wadi, Nagpur'),
(158, 'Kavya Verma',        'AIML',  89, null,  6900.25, 'Mihan, Nagpur'),
(159, 'Vivek Tiwari',       'AIDSA', 81, 'A',  null, 'Manewada, Nagpur')
;
alter table tb2 
drop column result;
select * from tb2;

update tb2 
set branch ="art" , addr = "YCCE"
where (branch is null OR addr is null);

select * from tb2 
where mark>(
	select avg(mark) from tb2
);

update tb2 
set fees = (select avg_fees from(select avg(fees) as avg_fees from tb2 ) as temp  ) where fees is null;
update tb2
set mark = (select avg_mark from (select avg(mark) as avg_mark from tb2) as temp) where mark is null;


INSERT INTO tb2 (rollno, fullname, branch, mark, grade, fees, addr)
VALUES
(435, 'Dipesh Padole ',         'DSC',   87, 'B',  545.00, 'kanhan, Nagpur');

UPDATE tb2
SET grade = 'A'
WHERE grade IS NULL;

select * from tb2 where fullname LIKE "O%";

select distinct(grade) from tb2;

select grade ,avg(fees) as avg_fees from tb2 
group by grade
having avg(fees)>1;

CREATE TABLE projects (
    proj_id INT,
    rollno INT,
    project_mark TINYINT,
    proj_subject VARCHAR(100),
    guide VARCHAR(50),
    cost FLOAT,
    completion_date DATE,

    PRIMARY KEY (proj_id, rollno),

    FOREIGN KEY (rollno)
        REFERENCES tb2(rollno),

    CHECK (project_mark BETWEEN 0 AND 100),
    CHECK (cost >= 0)
);

INSERT INTO projects
(proj_id, rollno, project_mark, proj_subject, guide, cost, completion_date)
VALUES
(301, 110, 88, 'Smart Electricity Consumption Monitor', 'Dr. Mehta', 18500.00, '2026-02-10'),
(301, 111, 84, 'Smart Electricity Consumption Monitor', 'Dr. Mehta', 18500.00, '2026-02-10'),

(302, 112, 92, 'Machine Learning Power Demand Prediction', 'Prof. Kulkarni', 22000.00, '2026-02-18'),
(302, 113, 79, 'Machine Learning Power Demand Prediction', 'Prof. Kulkarni', 22000.00, '2026-02-18'),

(303, 114, 86, 'AI Based Energy Usage Forecasting', 'Dr. Patil', 19500.00, '2026-03-01'),
(303, 115, 94, 'AI Based Energy Usage Forecasting', 'Dr. Patil', 19500.00, '2026-03-01'),

(304, 116, 72, 'Solar Panel Fault Detection System', 'Prof. Sharma', 16000.00, '2026-03-05'),
(304, 117, 90, 'Solar Panel Fault Detection System', 'Prof. Sharma', 16000.00, '2026-03-05'),

(305, 118, 85, 'Predictive Motor Maintenance Using Data', 'Dr. Rao', 25000.00, '2026-03-12'),

(306, 119, 78, 'IoT Based Transformer Health Monitoring', 'Prof. Joshi', 28000.00, NULL),
(306, 120, 91, 'IoT Based Transformer Health Monitoring', 'Prof. Joshi', 28000.00, NULL),

(307, 121, 87, 'Electric Vehicle Battery Health Prediction', 'Dr. Mehta', 32000.00, '2026-03-20'),
(307, 122, 89, 'Electric Vehicle Battery Health Prediction', 'Dr. Mehta', 32000.00, '2026-03-20'),

(308, 123, 68, 'Deep Learning Load Forecasting Model', 'Prof. Kulkarni', 24000.00, '2026-03-25'),

(309, 124, 81, 'Real Time Power Quality Analysis', 'Dr. Patil', 17500.00, '2026-04-02'),
(309, 125, 95, 'Real Time Power Quality Analysis', 'Dr. Patil', 17500.00, '2026-04-02'),

(310, 126, 73, 'AI Based Street Light Controller', 'Prof. Sharma', 12500.00, '2026-04-08'),
(310, 127, 82, 'AI Based Street Light Controller', 'Prof. Sharma', 12500.00, '2026-04-08'),

(311, 128, 88, 'Electrical Equipment Failure Prediction', 'Dr. Rao', 21000.00, '2026-04-12'),
(311, 129, 93, 'Electrical Equipment Failure Prediction', 'Dr. Rao', 21000.00, '2026-04-12'),

(312, 130, 76, 'Smart Grid Load Balancing System', 'Dr. Mehta', 35000.00, NULL),
(312, 131, 90, 'Smart Grid Load Balancing System', 'Dr. Mehta', 35000.00, NULL),

(313, 132, 71, 'Household Energy Usage Classification', 'Prof. Joshi', 14500.00, '2026-04-18'),

(314, 133, 89, 'Wind Turbine Performance Prediction', 'Dr. Patil', 27000.00, '2026-04-21'),
(314, 134, 96, 'Wind Turbine Performance Prediction', 'Dr. Patil', 27000.00, '2026-04-21'),

(315, 135, NULL, 'Electricity Theft Detection Using ML', 'Prof. Sharma', NULL, NULL),

(316, 136, 83, 'Battery Charging Time Prediction Model', 'Dr. Rao', 19000.00, '2026-05-02'),
(316, 137, 86, 'Battery Charging Time Prediction Model', 'Dr. Rao', 19000.00, '2026-05-02'),

(317, 138, 74, 'Power Consumption Anomaly Detection', 'Dr. Mehta', 15500.00, '2026-05-08'),

(318, 139, 92, 'Smart Home Energy Optimization System', 'Prof. Kulkarni', 23000.00, '2026-05-12'),

(319, 140, 80, 'Transformer Fault Classification Using ML', 'Dr. Patil', 26000.00, NULL),
(319, 141, 88, 'Transformer Fault Classification Using ML', 'Dr. Patil', 26000.00, NULL),

(320, 142, 69, 'Solar Energy Generation Prediction', 'Prof. Joshi', 18000.00, '2026-05-20'),

(321, 143, 97, 'AI Based Motor Fault Diagnosis', 'Dr. Rao', 21500.00, '2026-05-24'),
(321, 144, 91, 'AI Based Motor Fault Diagnosis', 'Dr. Rao', 21500.00, '2026-05-24'),

(322, 145, 75, 'Power Demand Forecasting Using Regression', 'Dr. Mehta', 17000.00, '2026-05-28'),

(323, 146, 89, 'Electric Vehicle Charging Station Analysis', 'Prof. Sharma', 30000.00, '2026-06-03'),
(323, 147, 85, 'Electric Vehicle Charging Station Analysis', 'Prof. Sharma', 30000.00, '2026-06-03'),

(324, 148, 70, 'Distribution Transformer Load Analysis', 'Prof. Kulkarni', 14000.00, '2026-06-08'),

(325, 149, 94, 'Smart Meter Data Analytics Dashboard', 'Dr. Patil', 19500.00, '2026-06-12'),
(325, 150, 90, 'Smart Meter Data Analytics Dashboard', 'Dr. Patil', 19500.00, '2026-06-12'),

(326, 151, 82, 'Electrical Demand Pattern Classification', 'Dr. Rao', 16500.00, '2026-06-15'),

(327, 152, 93, 'AI Based Solar Tracking System', 'Dr. Mehta', 29000.00, '2026-06-20'),

(328, 153, 67, 'Energy Consumption Forecasting Dashboard', 'Prof. Joshi', 15500.00, NULL),

(329, 154, 85, 'Industrial Motor Energy Optimization', 'Prof. Sharma', 20500.00, '2026-06-25'),

(330, 155, 96, 'Power System Fault Prediction', 'Dr. Patil', 27000.00, '2026-06-28'),

(331, 156, 78, 'Smart Grid Monitoring System', 'Dr. Mehta', 22000.00, '2026-07-02'),

(332, 157, 87, 'AI Based Energy Theft Detection', 'Prof. Sharma', 24500.00, '2026-07-08'),

(333, 158, 91, 'Industrial Energy Optimization System', 'Dr. Rao', 28000.00, '2026-07-12'),

(334, 159, 84, 'Smart Power Distribution Analysis', 'Prof. Kulkarni', 26000.00, '2026-07-18');





select * from projects ;
SELECT x.rollno
FROM (
    SELECT 101 AS rollno
    UNION ALL SELECT 102
    UNION ALL SELECT 103
    UNION ALL SELECT 104
    UNION ALL SELECT 105
    -- continue...
) AS x
LEFT JOIN tb2 t ON x.rollno = t.rollno
WHERE t.rollno IS NULL;

set @avgmark = (select avg(mark) 
from tb2);


select * from tb2 where 
mark> @avgmark;

select avg(mark) from tb2;
select fullname , mark from tb2 where mark =(select max(mark) from tb2);



create view project_view as select rollno , mark from tb2;

select * from project_view ;

select * from tb2 where not(branch = 'etc-c');
select * from tb2 where branch <> 'etc-c';
select * from tb2 where branch != 'etc-c';

select tb2.rollno , tb2.marks , project.rollno , project.project_mark from
tb2 left join project
on tb2.rollno = tb2.rollno;

 select tb2.rollno ,tb2.fullname, projects.proj_subject  from 
tb2 left join projects 
on tb2.rollno = projects.rollno;




select * from tb2 where rollno in (select rollno from projects);
SELECT rollno, proj_subject FROM projects;

drop table projects;

select  fullname , branch,  count(*) over() as total from projects join tb2 where projects.rollno=tb2.rollno;
select count(*) from projects join tb2 where projects.rollno=tb2.rollno;
select count(*) from tb2;
select s.fullname from tb2 s left join projects p on s.rollno=p.rollno;
select count(*) from tb2 s right join projects p on s.rollno=p.rollno;

select tb2.fullname , projects.proj_id , projects.proj_subject from tb2 cross join projects;


select tb2.fullname,tb2.mark as subject_mark , projects.project_mark as project_marks , tb2.mark + projects.project_mark as total_marks 
from tb2 inner join projects on 
tb2.rollno = projects.rollno;