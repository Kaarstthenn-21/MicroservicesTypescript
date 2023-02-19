import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import 'reflect-metadata';

// @Controller('/hola')
@JsonController()
export class HelloWorld {
  constructor() { }
  @Get('/')
  get() {
    return { "msg": "This is first Typescript Microservice" }
  }
}