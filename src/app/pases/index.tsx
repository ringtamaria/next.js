import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api1/v1");
  const posts = await res.json();
}
