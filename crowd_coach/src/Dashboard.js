import React, {useState, useEffect} from 'react'


export default function Dashboard() {


    return(
        <section class="form">
            <div class="title">
                <h1 class="title"></h1>
                <h3 class="subtitle"></h3>
            </div>
            <div class="form">
                <form action="">
                    <label for="">Campaign Goal
                        <input type="number"/>
                    </label>
                    <label for="">Campaign Length
                        <input type="text"/>
                    </label>
                    <label for="">Category
                        <input type="text"/>
                    </label>
                    <label for="">Description
                        <input type="text"/>
                    </label>
                </form>
            </div>
        </section>
    )
}