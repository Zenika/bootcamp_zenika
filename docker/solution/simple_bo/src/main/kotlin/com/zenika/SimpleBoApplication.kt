package com.zenika

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class SimpleBoApplication

fun main(args: Array<String>) {
    SpringApplication.run(SimpleBoApplication::class.java, *args)
}
