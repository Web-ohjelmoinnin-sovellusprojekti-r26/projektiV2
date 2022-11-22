drop database if exists climate;

create database climate;

use climate;

create table temperature (
    id int primary key auto_increment,
    description varchar(255) not null
)

insert into temperature (description) values ("25c");