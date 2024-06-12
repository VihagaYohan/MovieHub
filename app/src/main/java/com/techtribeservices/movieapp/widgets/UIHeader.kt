package com.techtribeservices.movieapp.widgets

import androidx.compose.foundation.layout.Row
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.tooling.preview.Preview

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun UIHeader(
    title: String,
    isShowTitle: Boolean = false,
    showNavigationIcon: Boolean = false,
    navigationIcon: ImageVector? = null,
    showActions: Boolean = false,
    actions: ImageVector? = null,
) {
    CenterAlignedTopAppBar(
        navigationIcon = {
            if(navigationIcon != null && showNavigationIcon) {
                IconButton(onClick = { /*TODO*/ }) {
                    Icon(imageVector = navigationIcon, contentDescription = "navigation icon")
                }
            }
        },
        actions = {
            if(actions != null && showActions) {
               IconButton(onClick = { /*TODO*/ }) {
                   Icon(
                       imageVector = actions,
                       contentDescription = "action buttons"
                   )
               }
            }
        },
        title = {
            Text(text = if (isShowTitle) title else "")
        })
}

@Preview(showBackground = true)
@Composable
fun UIHeaderPreview() {
    UIHeader(
        title = "Movie Hub",
        isShowTitle =  true,
        showNavigationIcon = true,
        showActions = true,
        navigationIcon = Icons.Filled.ArrowBack,
        actions = Icons.Filled.ArrowBack)
}