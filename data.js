// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'nextgraph',
	Name: 'NextGraph',
	Description: 'Decentralized and local-first web 3.0 ecosystem (everything apps and framework/SDK)',
	Website: 'https://nextgraph.org',
	Deployment: ['Self-hosted','Hosted'],
	License: 'MIT',
	MaturityLevel: 'Alpha',
	GitHub: 'https://git.nextgraph.org/NextGraph/nextgraph-rs',
	UniquenessNote: 'convergence of Linked Data, P2P, and local-first',
	InitialReleaseDate: new Date('2024-09-02'),
	// Score: {
	// 	MultiDeviceCrossDevice: { data: 'Yes'},
	// 	MultiDeviceDecentralized: { data: 'Yes', comment: 'replication with a federation of servers. no single point of failure' },
	// 	OfflineSupportWrites: { data: 'Yes' },
	// 	OfflineSupportArbitraryQueries: { data: 'Yes', comment: 'offline support for SPARQL on all local documents'},
	// 	UserOwnedData: { data: 'Yes'},
	// 	CollaborationMultiEdit: { data: 'Yes'},
	// 	CollaborationConflictingWrites: { data: 'Yes'},
	// 	SecurityE2EE: { data: 'Yes'},
	// 	SecurityUserKeys: { data: 'Yes'},
	// 	LongevityNoProprietaryServer: { data: 'Yes'}
	// },
	AppTarget: {
		Platform: { data: ['Browser', 'Node', 'iOS', 'Android', 'macOS', 'WASM', 'Linux'] },
		LanguageSDK: { data: ['TypeScript', 'JavaScript', 'Rust', 'Python'] },
		FrameworkIntegrations: { data: ['React', 'Svelte'] },
		ClientBundleSize: { data: '4 kB compressed', comment: 'not including Automerge or Yjs dependencies' }
	},
	Networking: {
		Protocol: { data: ['WebSockets'] },
		Topology: { data: 'P2P via Relay Servers' },
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['Custom'] },
		DataModelParadigm: { data: 'Document', comment: 'Document-oriented and graph (RDF)' }
	},
	ClientSideData: {
		QueryAPI: { data: ['Async', 'Sync', 'Signals-based Reactivity'] },
		PersistenceMechanism: { data: ['Yjs', 'OPFS', 'RocksDB'] },
		PersistenceFeatures: { data: 'Indexes', comment: 'also with Full-text search and Transactions' },
		DataModel: { data: 'Document', comment: 'Document-oriented and graph (RDF)' },
		SchemaManagement: { data: ['Schema definition', 'Schema validation on write'] },
		OfflineReads: { data: 'Full Support' },
		OptimisticUpdates: { data: 'Yes'},
		OfflineWrites: { data: 'Local conflict resolution' }
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication', 'Partial Replication'] },
		ConflictHandling: { data: 'Automatic via CRDT', comment: 'supports Automerge, Yjs and RDF' },
		WhereResolutionOccurs: { data: 'Client' },
		WhatGetsSynced: {
			data: {
				ClientToClient: 'Commits',
			},
		},
		Authority: { data: 'Decentralized' }
	},
	AuthIdentity: {
		Encryption: { data: 'Yes', comment: 'end-to-end encryption + encryption at rest' },
		AuthenticationMethod: { data: ['Built-in', 'Public keys'] },
		AuthorizationPermissions: { data: 'Cryptographic Capabilities' }
	},
	UIRelated: {
		RichTextEditing: { data: 'Yes' },
		Components: { data: ['reusable Editors', 'reusable Viewers', 'Auth with Wallet', 'Malleable software'] }
	},
	DevelopmentWorkflowsDX: {
		CLI: { data: 'Command line interface tools for developers and end-users'},
		TypeSupport: {
			data: 'type support via LDO',
		},
	}
})
