################################################################################################################

create database proj;

use proj

create table users (
    user_id int primary key auto_increment,
    name char(50) not null,
    email char(255) not null unique,
    password varchar(1000) not null
);