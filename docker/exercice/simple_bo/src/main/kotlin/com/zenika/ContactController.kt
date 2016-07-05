package com.zenika

import org.springframework.web.bind.annotation.*
import java.util.*
import java.util.concurrent.atomic.AtomicLong

/**
 * Created by gwen on 19/06/16.
 */

@RestController
class ContactController {

    private val _counter = AtomicLong()
    private val _contacts = ArrayList<Contact>()

    private val _specificDetailMap = mapOf(
            Pair("GWEN", "Il est super cool..."),
            Pair("MARCEL", "Il était marrant le Beliveau...")
    )

    @CrossOrigin
    @RequestMapping("/add")
    fun addContact(@RequestParam(value = "name", defaultValue = "Marcel Beliveau") name: String): ArrayList<Contact> {
        var detail: String = _specificDetailMap[name.toUpperCase()].orEmpty()

        if (detail.isEmpty())
            detail = "Un mec plutôt sympa ..."

        val contact = Contact(_counter.incrementAndGet(), name, detail)

        _contacts.add(contact)

        return _contacts
    }

    @CrossOrigin
    @RequestMapping("/list")
    fun listContacts(): ArrayList<Contact> {
        return _contacts
    }

}