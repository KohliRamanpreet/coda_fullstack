package com.vote.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Interests1 {
@Id
@GeneratedValue(strategy  = GenerationType.AUTO)
private int id1;
private int id;
private String sub;
private int points;
public int getId1() {
	return id1;
}
public void setId1(int id1) {
	this.id1 = id1;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getSub() {
	return sub;
}
public void setSub(String sub) {
	this.sub = sub;
}
public int getPoints() {
	return points;
}
public void setPoints(int points) {
	this.points = points;
}
public Interests1(int id1, int id, String sub, int points) {
	super();
	this.id1 = id1;
	this.id = id;
	this.sub = sub;
	this.points = points;
}
@Override
public String toString() {
	return "Interests1 [id1=" + id1 + ", id=" + id + ", sub=" + sub + ", points=" + points + "]";
}
public Interests1() {
	super();
}

}
