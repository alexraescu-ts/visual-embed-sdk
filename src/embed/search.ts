/**
 * Copyright (c) 2021
 *
 * Embed ThoughtSpot search or a saved answer
 *
 * @summary Search embed
 * @author Ayon Ghosh <ayon.ghosh@thoughtspot.com>
 */

import { DataSourceVisualMode, DOMSelector, Param } from '../types';
import { getQueryParamString } from '../utils';
import { ViewConfig, TsEmbed } from './base';

/**
 * The configuration attributes for the embedded search view.
 *
 * @Category Search Embed
 */
export interface SearchViewConfig extends ViewConfig {
    /**
     * If set to true, the data sources panel is collapsed on load,
     * but can be expanded manually.
     */
    collapseDataSources?: boolean;
    /**
     * If set to true, hides the data sources panel.
     */
    hideDataSources?: boolean;
    /**
     * If set to true, hides the charts and tables in search answers.
     * This attribute can be used to create a custom visualization
     * using raw answer data.
     */
    hideResults?: boolean;
    /**
     * If set to true, the Search Assist feature is enabled.
     */
    enableSearchAssist?: boolean;
    /**
     * The array of data source GUIDs to set on load.
     */
    dataSources?: string[];
    /**
     * The initial search query to load the answer with.
     */
    searchQuery?: string;
    /**
     * The GUID of a saved answer to load initially.
     */
    answerId?: string;
}

/**
 * Embed ThoughtSpot search
 *
 * @Category Search Embed
 */
export class SearchEmbed extends TsEmbed {
    /**
     * The view configuration for the embedded ThoughtSpot search.
     */
    private viewConfig: SearchViewConfig;

    constructor(domSelector: DOMSelector, viewConfig: SearchViewConfig) {
        super(domSelector);
        this.viewConfig = viewConfig;
    }

    /**
     * Get the state of the data sources panel that the embedded
     * ThoughtSpot search will be initialized with.
     */
    private getDataSourceMode() {
        let dataSourceMode = DataSourceVisualMode.Expanded;
        if (this.viewConfig.collapseDataSources === true) {
            dataSourceMode = DataSourceVisualMode.Collapsed;
        }
        if (this.viewConfig.hideDataSources === true) {
            dataSourceMode = DataSourceVisualMode.Hidden;
        }

        return dataSourceMode;
    }

    /**
     * Construct the URL of the embedded ThoughtSpot search to be
     * loaded in the iframe
     * @param answerId The GUID of a saved answer
     * @param dataSources A list of data source GUIDs
     * @param searchQuery A search query to be generated on load
     */
    private getIFrameSrc(
        answerId: string,
        dataSources?: string[],
        searchQuery?: string,
    ) {
        const {
            disabledActions,
            disabledActionReason,
            hiddenActions,
            hideResults,
            enableSearchAssist,
        } = this.viewConfig;
        const answerPath = answerId ? `saved-answer/${answerId}` : 'answer';
        const queryParams = {};
        if (dataSources && dataSources.length) {
            queryParams[Param.DataSources] = JSON.stringify(dataSources);
        }
        if (searchQuery) {
            queryParams[Param.SearchQuery] = encodeURIComponent(searchQuery);
        }
        if (enableSearchAssist) {
            queryParams[Param.EnableSearchAssist] = true;
        }
        if (hideResults) {
            queryParams[Param.HideResult] = true;
        }
        if (disabledActions?.length) {
            queryParams[Param.DisableActions] = disabledActions;
        }
        if (disabledActionReason) {
            queryParams[Param.DisableActionReason] = disabledActionReason;
        }
        if (hiddenActions?.length) {
            queryParams[Param.HideActions] = hiddenActions;
        }

        queryParams[Param.DataSourceMode] = this.getDataSourceMode();
        queryParams[Param.UseLastSelectedDataSource] = false;

        let query = '';
        const queryParamsString = getQueryParamString(queryParams, true);
        if (queryParamsString) {
            query = `?${queryParamsString}`;
        }

        return `${this.getEmbedBasePath(query)}/${answerPath}`;
    }

    /**
     * Render the embedded ThoughtSpot search
     */
    public render(): SearchEmbed {
        super.render();
        const { answerId, dataSources, searchQuery } = this.viewConfig;

        const src = this.getIFrameSrc(answerId, dataSources, searchQuery);
        this.renderIFrame(src, this.viewConfig.frameParams);
        return this;
    }
}
