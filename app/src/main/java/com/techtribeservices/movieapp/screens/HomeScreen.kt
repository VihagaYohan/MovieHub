package com.techtribeservices.movieapp.screens

import androidx.activity.ComponentActivity
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Menu
import androidx.compose.material.icons.outlined.Notifications
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.techtribeservices.movieapp.widgets.UIHeader

@Composable
fun HomeScreen () {
    Scaffold {innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding)
        ) {
            UIHeader(
                title = "Movie Hub",
                isShowTitle = true,
                showNavigationIcon = true,
                navigationIcon = Icons.Outlined.Menu,
                showActions = true,
                actions = Icons.Outlined.Notifications
            )
        }
    }
}

@Preview(showBackground =  true)
@Composable
fun HomeScreenPreview() {
    HomeScreen()
}